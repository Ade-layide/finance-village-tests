class LandingPageNav {
    goToLogin() {
        return cy.get("a").contains('Log In')
    }

    goToJoinUs() {
        return cy.get("a").contains('Become a Member')
    }

    goToAboutUs() {
        return cy.get("a").contains('About Us')
    }

    goToTestimonials() {
        return cy.get("a").contains('Testimonials')
    }

    goToFaqs() {
        return cy.get("a").contains('FAQS')
    }

    goToBlog() {
        return cy.get("a").contains('Blog')
    }
    
    validateNavBar() {
        this.goToLogin().should('be.visible')
        this.goToJoinUs().should('be.visible')
        this.goToAboutUs().should('be.visible')
        this.goToTestimonials().should('be.visible')
        this.goToFaqs().should('be.visible')
        this.goToBlog().should('be.visible')

    }
}
export default LandingPageNav;