import { expect } from "chai";

class SignUpPage {
    getFreePackage() {
        return cy.get('.free').should('have.class', 'card-joinus')
                              .and('include.text', 'Free Membership')
    }

    getPaidPackage() {
        return cy.get('.paid').should('have.class', 'card-joinus' )
                              .and('include.text', 'Premium Membership')
    }

    chooseFreePackage() {
        this.getFreePackage().within(() => {
            cy.get('button.signin').contains('Choose this plan').click()
        })
    }

    choosePaidPackage() {
        this.getPaidPackage().within(() => {
            cy.get('button.signin').contains('Choose this plan').click()
        })
    }

    getSignUpForm() {
        cy.get('#regForm')
    }

    getFirstnameField() {
        cy.get('input.form-control').contains('label', 'firtsname')
    }

    getLastnameField() {
        cy.contains('label', 'firtsname')
    }

    getEmailField() {
        cy.get()
    }

    getNumberField() {
        cy.get()
    }

    getRefField() {
        cy.get()
    }

    getPasswordField() {
        cy.get()
    }

    getConfirmPasswordField() {
        cy.get()
    }

    getSignUpButton() {
        cy.get()
    }

    getCancelButton() {
        cy.get()
    }

    validateSignUpPackages() {
        this.getFreePackage().should('be.visible')
        this.getPaidPackage().should('be.visible')
    }

    validateSignUpForm() {
        cy.get('form#regForm').within(() => {
            cy.get('input.form-control')
        })
    }
}
export default SignUpPage;