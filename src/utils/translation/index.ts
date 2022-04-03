import { es } from './es'
const languages = {
  es
}

export const translate = (language: string, text: string): string => {
  try {
    const translation = languages[language.split('-')[0]][text]
    return translation || ''
  } catch (e) {
    console.log('Error while translating')
    return ''
  }
}
