class LoginPage{
    selectorslist() {
        const selectors = {
            userNameField: '[name=username]',
            passwordField: '[name=password]',
            loginButton: '[type=submit]'
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('localhost:3000/signin')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorslist().userNameField).type(username)
        cy.get(this.selectorslist().passwordField).type(password)
        cy.get(this.selectorslist().loginButton).click()
    }

}

export default LoginPage