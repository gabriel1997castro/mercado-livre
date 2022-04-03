import { product } from '../types/product'
import { translate } from './translation'
import { result as resultType } from '../types/result'
import { filterCategory } from '../types/categories'

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

export function extractFilterCategories(filters: any): filterCategory[] {
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
