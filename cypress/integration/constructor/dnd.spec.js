describe('dnd works correctly', function () {
  before(function () {
    cy.visit('http://localhost:3000');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
  });

  it('should drag and drop and delete ingredient', function () {
    cy
      .get('article')
      .contains('Мясо бессмертных моллюсков Protostomia')
      .trigger('dragstart');
    cy.get('#dropTarget').trigger('drop');
    cy
      .get('#dropTarget')
      .contains('Мясо бессмертных моллюсков Protostomia')
      .should('exist');
    cy.get('span.constructor-element__action').click();
    cy.get('#dropTarget')
      .contains('Мясо бессмертных моллюсков Protostomia')
      .should('not.exist');
  });

  it('should drag and drop buns in buns container', function () {
    cy.get('article')
      .contains('Флюоресцентная булка R2-D3')
      .trigger('dragstart');
    cy.get('#dropTarget').trigger('drop');
    cy.get('#topBun')
      .contains('Флюоресцентная булка R2-D3')
      .should('exist');
    cy.get('#bottomBun')
      .contains('Флюоресцентная булка R2-D3')
      .should('exist');

    cy.get('article')
      .contains('Краторная булка N-200i')
      .trigger('dragstart');
    cy.get('#dropTarget').trigger('drop');
    cy.get('#topBun')
      .contains('Флюоресцентная булка R2-D3')
      .should('not.exist');
    cy.get('#bottomBun')
      .contains('Флюоресцентная булка R2-D3')
      .should('not.exist');
    cy.get('#topBun')
      .contains('Краторная булка N-200i')
      .should('exist');
    cy.get('#bottomBun')
      .contains('Краторная булка N-200i')
      .should('exist');
  });
});
