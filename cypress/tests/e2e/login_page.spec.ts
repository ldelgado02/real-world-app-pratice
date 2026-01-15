const Chance = require('chance');

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('localhost:3000/signin')
    cy.get("[name='username']").type('ldelgado02')
    cy.get("[name='password']").type('Teste123')
    cy.get("[type='submit']").click()
    cy.get("[data-test='user-onboarding-dialog-title']").contains("Get Started with Real World App")
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('localhost:3000/signin')
    cy.get("[name='username']").type('TestFailed')
    cy.get("[name='password']").type('TesteFailed123')
    cy.get("[type='submit']").click()
    cy.get(".MuiAlert-message").contains("Username or password is invalid")
  });
});

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.url().should('include', '/signup');
    cy.get("[name='firstName']").type(chance.first())
    cy.get("[name='lastName']").type(chance.last())
    cy.get("[name='username']").type(chance.string())
    cy.get("[name='password']").type("passwordTest123")
    cy.get("[name='confirmPassword']").type("passwordTest123")
    cy.get("[type='submit']").click()
    cy.url().should('include', '/signin');
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Botão de confirmar novo usuário não deve estar "clicável" ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('localhost:3000/signin')
    cy.get("[href='/signup']").click()
    cy.url().should('include', '/signup');
    cy.get("[name='firstName']").type(chance.first())
    cy.get("[name='lastName']").type(chance.last())
    cy.get("[name='username']").type(chance.string())
    cy.get("[name='password']").type("passwordTest123")
    cy.get("[type='submit']").should('be.disabled');
  });
});
