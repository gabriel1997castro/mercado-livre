import { product } from '../types/product'
import { translate } from './translation'

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
