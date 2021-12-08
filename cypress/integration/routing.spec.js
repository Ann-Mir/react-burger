describe('routing works correctly', function() {
  before(function() {
    cy.visit('http://localhost:3000');
  });

  it('should open main page upon start', function () {
    cy.contains('Соберите бургер');
  });

  it('should start with unauthorized page', function () {
    cy.contains('Войти');
  });

  it('should show screen for authorized users upon login', function () {

    cy.get('a').contains('Войти').click();
    cy.get('div.input__icon').first().click();
    cy.get("input[type='email']").type('stellar@stellar.com');
    cy.get("input[type='password']").type('stellarstellar');
    cy.get('button').contains('Войти').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000);

    cy.contains('Личный кабинет');
  });

  it('should open ingredient modal', function() {
    cy.get('article').contains('Филе Люминесцентного тетраодонтимформа').click();
    cy.contains('Детали ингредиента').should('exist');
    cy.get('#modal').contains('Филе Люминесцентного тетраодонтимформа').should('exist');
  });

  it('should open ingredient page upon reload', function() {
    cy.reload();
    cy.get('h3').contains('Филе Люминесцентного тетраодонтимформа').should('exist');
    cy.get('#modal').should('not.exist');
  });

  it('should return to main page without modal', function() {
    cy.go('back');
    cy.contains('Соберите бургер');
    cy.get('#modal').should('not.exist');
  });

  it('should open feed page upon feed link click', function () {
    cy.get('a').contains('Лента заказов').click();
    cy.contains('Готовы');
  });
});
