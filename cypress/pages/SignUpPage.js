class SignUpPage{
    selectorslist(){
        const selectors = {
            firstNameField: '[name=firstName]',
            lastNameField: '[name=lastName]',
            usernameField: '[name=username]',
            passwordField: '[name=password]',
            confirmPasswordField: '[name=confirmPassword]',
        }

        return selectors
    }

    accessSignUpPage() {
        cy.visit('localhost:3000/signup')
    }

    newUser(firstName, lastName, username, password) {
        cy.get(this.selectorslist().firstNameField).type(firstName)
        cy.get(this.selectorslist().lastNameField).type(lastName)
        cy.get(this.selectorslist().usernameField).type(username)
        cy.get(this.selectorslist().passwordField).type(password)
        cy.get(this.selectorslist().confirmPasswordField).type(password)
    }

}

export default SignUpPage