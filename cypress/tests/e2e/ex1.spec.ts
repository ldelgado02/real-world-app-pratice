import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import SignUpPage from '../../pages/SignUpPage.js'

var Chance = require('chance');
var chance = new Chance();
var loginPage = new LoginPage()
var signUpPage = new SignUpPage()


// Teste na Login Page
describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    cy.get('[data-test=nav-transaction-tabs]')
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    cy.get("[type='submit']").click()
    cy.get(".MuiAlert-message").contains("Username or password is invalid")
  });
});


// Testes na Sign Up Page (Criar novo usuário)
describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    signUpPage.accessSignUpPage()
    signUpPage.newUser(chance.first(), chance.last(), chance.string(), "passwordTest123")
    cy.get("[type='submit']").click()
    cy.url().should('include', '/signin');
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Botão de confirmar novo usuário não deve estar "clicável" ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    signUpPage.accessSignUpPage()
    signUpPage.newUser(chance.first(), chance.last(), chance.string(), "99")
    cy.get("[type='submit']").click()
    cy.url().should('include', '/signin');
  });
});
