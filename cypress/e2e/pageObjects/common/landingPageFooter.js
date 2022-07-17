class LandingPageFooter {
    getNewsletterSignupField(){
        return cy.get('input.mailInput').should('have.attr', 'placeholder', 'Enter your email')
    }

    getNewsletterSignUpButton() {
        return cy.get('.btnInput').contains('Submit')
    }

    newsletterSignUp(email){
        this.getNewsletterSignupField().type(email)
    }

    validateFooter() {
        this.getNewsletterSignupField().should('be.visible')
        this.getNewsletterSignUpButton().should('be.visible')
    }
}
export default LandingPageFooter;