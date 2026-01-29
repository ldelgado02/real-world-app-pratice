class TransactionPage{
    selectorslist() {
        const selectors = {
            newTransactionButton: '[data-test=nav-top-new-transaction]',
            contactButton: '.MuiListItemText-multiline',
            ammoutField: '[name=amount]',
            noteField: '[data-test=transaction-create-description-input]',
            paymentButton: '[data-test=transaction-create-submit-payment]',
            requestButton: '[data-test=transaction-create-submit-request]',
            alertTransactionSuccess: '[data-test=alert-bar-success]',
        }

        return selectors
    }

    accessTransactionPage() {
        cy.get(this.selectorslist().newTransactionButton).click()
    }

    successTransaction(ammount, note) {
        cy.get(this.selectorslist().contactButton).eq(0).click({force: true})
        cy.get(this.selectorslist().ammoutField).type(ammount)
        cy.get(this.selectorslist().noteField).type(note)
        cy.get(this.selectorslist().paymentButton).click()
        cy.get(this.selectorslist().alertTransactionSuccess)
    }

    failedTransaction(ammount, note) {
        cy.get(this.selectorslist().contactButton).eq(0).click({force: true})
        cy.get(this.selectorslist().ammoutField).type(ammount)
        cy.get(this.selectorslist().noteField).type(note)
        cy.get(this.selectorslist().paymentButton).should('be.disable')
    }

    successRequest(ammount, note) {
        cy.get(this.selectorslist().contactButton).eq(0).click({force: true})
        cy.get(this.selectorslist().ammoutField).type(ammount)
        cy.get(this.selectorslist().noteField).type(note)
        cy.get(this.selectorslist().requestButton).click()
        cy.get(this.selectorslist().alertTransactionSuccess)
    }
}

export default TransactionPage