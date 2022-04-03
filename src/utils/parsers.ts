import { product } from '../types/product'
import { translate } from './translation'
import { result as resultType } from '../types/result'

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
  const config: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency
  }
  if (typeof maximumFractionDigits === 'number')
    config.maximumFractionDigits = maximumFractionDigits
  return Intl.NumberFormat(language, config).format(price)
}
