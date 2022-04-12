import React from 'react'
import { translate } from '../../utils/translation'
import { render, fireEvent } from '../testUtils'
import '@testing-library/jest-dom'
import SearchResults from '../../components/SearchResults'


describe('<SearchResults>', () => {
  const initialLanguage = 'es-AR'

  it('should show a fallback message when there are no results to the search', () => {
    const expectedText = translate(initialLanguage, "There are no results for your search.")
    const utils = render(<SearchResults results={[]} error={false} />, {})
    const fallbackNoResults = utils.getByTestId("no-results-text") as HTMLParagraphElement
    expect(fallbackNoResults.textContent).toBe(expectedText)
  })

  it('should show an error message when receive the error tag', () => {
    const expectedText = translate(initialLanguage, "There was a problem, please try again later.")
    const utils = render(<SearchResults results={[]} error={true} />, {})
    const fallbackNoResults = utils.getByTestId("error-results-search") as HTMLElement
    expect(fallbackNoResults.textContent).toBe(expectedText)
  })

})
