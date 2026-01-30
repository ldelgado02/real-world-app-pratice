import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import HistoryTransactionPage from '../../pages/historyTransactionPage.js'

var loginPage = new LoginPage();
var historyTransactionPage = new HistoryTransactionPage();

describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    historyTransactionPage.accessHistoryPage()
    historyTransactionPage.userWithPreviousTransactions()
  });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userWithoutTransactionHistory.username, userData.userWithoutTransactionHistory.password)
    historyTransactionPage.accessHistoryPage()
    historyTransactionPage.userWithoutPreviousTransactions()
  });
});