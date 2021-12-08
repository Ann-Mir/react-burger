describe('makes orders correctly', function () {
  before(function () {
    cy.visit('http://localhost:3000');
  });

  it('should make order', function () {
    cy.get('article')
      .contains('Флюоресцентная булка R2-D3')
      .trigger('dragstart');
    cy.get('#dropTarget').trigger('drop');
    cy
      .get('article')
      .contains('Мясо бессмертных моллюсков Protostomia')
      .trigger('dragstart');
    cy.get('#dropTarget').trigger('drop');

    cy.get('button').contains('Оформить заказ').click();

    cy.get("input[type='email'] + div.input__icon").click();
    cy.get("input[type='email']").type('stellar@stellar.com');
    cy.get("input[type='password']").type('stellarstellar');
    cy.get('button').contains('Войти').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000);

    cy.get('button').contains('Оформить заказ').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(15000);
    cy
      .get('div')
      .contains('идентификатор заказа')
      .should('exist');
  });
});
