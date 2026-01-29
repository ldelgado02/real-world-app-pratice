class HistoryTransactionPage{
    selectorslist() {
        const selectors = {
            historyTransactionButton: '[data-test=nav-personal-tab]',
            emptyTransactionsField: '[data-test=empty-list-header]',
            transactionList: '[data-test=transaction-list]',
            createTransactionButton: '[data-test=transaction-list-empty-create-transaction-button]'
        }

        return selectors
    }

    accessHistoryPage() {
        cy.get(this.selectorslist().historyTransactionButton).click()
    }

    userWithPreviousTransactions() {
        cy.get(this.selectorslist().transactionList).should('be.visible')
    }

    userWithoutPreviousTransactions() {
        cy.get(this.selectorslist().emptyTransactionsField).should('be.visible')
        cy.get(this.selectorslist().createTransactionButton).should('be.visible')
    }


}

export default HistoryTransactionPage