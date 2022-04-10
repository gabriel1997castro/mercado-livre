import React from 'react'
import { translate } from '../../utils/translation'
import { render, fireEvent } from '../testUtils'
import '@testing-library/jest-dom'
import Home from '../../pages/index'


describe('Home', () => {
  const initialLanguage = 'es-AR'
  const searchPlaceholder = 'Never stop searching'

  it('should change value on type in the <SearchBar />', () => {
    const utils = render(<Home />, {})
    const input = utils.getByPlaceholderText(translate(initialLanguage, searchPlaceholder)) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'iphone' } })
    expect(input.value).toBe('iphone')
  })

})
