describe('Simple E2E Test', () => {
  it('simple foursquare api test', () => {
    cy.intercept('*/places/search*').as('placesSearch');
    cy.visit(`/`);
    cy.get('.test-button-area input').type('coffee');
    cy.get('.test-button-area .ant-input-group-wrapper button').click();
    cy.wait('@placesSearch').its('response.statusCode').should('eq', 200);
  });
});
