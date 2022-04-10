/// <reference types="cypress" />
import { translate } from '../../src/utils/translation'

describe('Navigation', () => {
  const initialLanguage = 'es-AR'
  const searchPlaceholder = 'Never stop searching'

  it('should navigate to the items page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[placeholder*="' + translate(initialLanguage, searchPlaceholder) + '"]').type('iphone')
    cy.get('button[aria-label="' + translate(initialLanguage, 'search') + '"]').click()

    cy.url().should('include', '/items')

  })

  it('should have a query parameter "search" and it should be encoded after searching', () => {
    const searchText = 'ipad 5'
    const searchTextEncoded = encodeURI(searchText)
    cy.get('input[placeholder*="' + translate(initialLanguage, searchPlaceholder) + '"]').clear().type(searchText)
    cy.get('button[aria-label="' + translate(initialLanguage, 'search') + '"]').click()

    cy.url().should('include', 'search=' + searchTextEncoded)
  })

  it('should contain the maximum of 4 products in the items page', () => {
    // get elements that starts with SearchItem__ContainerImg
    cy.get('*[class^="SearchItem__ContainerImg"]').should('have.length.lessThan', 5)
  })
})
