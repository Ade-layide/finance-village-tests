import { expect } from "chai"

class LoginPage {

    getEmailAddressField() {
        return cy.get('input').eq(0).should('have.attr', 'placeholder', 'Email Address')
    }

    getPasswordField() {
        return cy.get('input').eq(1).should('have.attr', 'placeholder', 'Password')
    }

    getLoginButton() {
        return cy.get('.loginBtn').contains('Proceed')
    }

    getForgotPasswordLink() {
        return cy.get('a.forgotPass').contains('Forgot Password ?')
    }
    // add test for privacy policy checbox after checkbox is added

    getCreateAccountLink() {
        return cy.get('a.createAcc').should('have.text', 'Create an Account')
    }

    validateLoginPage() {
        this.getEmailAddressField().should('be.visible')
        this.getPasswordField().should('be.visible')
        this.getForgotPasswordLink().should('be.visible')
        this.getLoginButton().should('be.visible')
        this.getCreateAccountLink().scrollIntoView().should('be.visible')
        //add validation for privacy policy when checkbox is added

    }
}
export default LoginPage;