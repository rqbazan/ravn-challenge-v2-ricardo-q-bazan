describe('person view', () => {
  it('can show the person details', () => {
    cy.visit('/')

    cy.findByText(/^Luke Skywalker$/g).click()

    cy.findByTestId('personName.value').should('have.text', 'Luke Skywalker')
  })
})
