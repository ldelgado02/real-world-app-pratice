import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import TransactionPage from '../../pages/transactionPage.js'

var Chance = require('chance');
var chance = new Chance();
var loginPage = new LoginPage();
var transactionPage = new TransactionPage();

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    transactionPage.accessTransactionPage()
    transactionPage.successTransaction(chance.prime(), 'Payment Test')
  });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    transactionPage.accessTransactionPage()
    transactionPage.failedTransaction(chance.prime(), 'Negative Test')
  });
});

describe('Requisitar dinheiro', () => {
  it('Deve exibir uma mensagem informando o dinheiro requisitado', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    transactionPage.accessTransactionPage()
    transactionPage.successRequest(chance.prime(), 'Request Success Test')
  })
});
