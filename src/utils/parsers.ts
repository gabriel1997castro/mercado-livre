import { product } from '../types/product'
import { translate } from './translation'
import { result as resultType } from '../types/result'
import { product as productType } from '../types/product'
import {
  categories as categoriesType,
  filter,
  filterCategory,
  filterItem
} from '../types/categories'

export const parseCondition = (product: product): string => {
  try {
    const { attributes } = product
    const condition = attributes.filter(item => item.id === 'ITEM_CONDITION')
    return condition[0].value_name
  } catch (e) {
    console.log('Error in parseCondition')
    return ''
  }
}

export const parseSoldQuantity = (
  language: string,
  product: product
): string => {
  const text = product.sold_quantity + ' ' + translate(language, 'sold')
  return text
}

export function parsePrice(
  language: string,
  result: resultType | product,
  maximumFractionDigits?: number
) {
  const { currency_id: currency } = result
  const { price } = result
  return Intl.NumberFormat(language, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits:
      maximumFractionDigits !== undefined ? maximumFractionDigits : 2
  }).format(price)
}

export function extractFilterCategories(filters: any): filterItem[] {
  try {
    if (Array.isArray(filters)) {
      const categoryValues = filters.filter(item => item.id === 'category')[0]
        .values[0].path_from_root
      return categoryValues
    }
  } catch (err) {
    console.log('error in extractFilterCategories')
    return []
  }
}

// export function extractPathFromRoot(filters: filter[]): filterCategory[] {
//   try {
//     let newArr = []
//     if (Array.isArray(filters)) {
//       filters.map(item => (newArr = [...item.path_from_root]))
//       return newArr
//     }
//   } catch (err) {
//     console.log('error in extractFilterCategories')
//     return []
//   }
// }

export function extractAttributeValue(product: productType, attribute: string) {
  try {
    const att = product.attributes.filter(item => item.id === attribute)[0]
    return att.values
  } catch (error) {
    console.log('error in extractAttributeValue')
    return []
  }
}

export function extractBreadcrumbData(
  categories: categoriesType,
  product: productType
): filterCategory[] {
  try {
    let newArr = []
    if (categories && categories.path_from_root) {
      newArr = [...categories.path_from_root]
    }
    if (product && product.attributes) {
      const brand = extractAttributeValue(product, 'BRAND')
      const model = extractAttributeValue(product, 'MODEL')
      newArr = [...newArr, ...brand, ...model]
    }
    return newArr
  } catch (err) {
    console.log('error in extractFilterCategories')
    return []
  }
}
