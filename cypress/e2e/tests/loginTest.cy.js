/**
 * Author : Olayide
 */
import LandingPageNav from "../pageObjects/common/landingPageNav";
import LoginPage from "../pageObjects/user/loginPage";
import LandingPageFooter from "../pageObjects/common/landingPageFooter";

let landingPageNav;
let loginPage;
let landingPageFooter;

describe('Log In', () => {
    before(() => {
        landingPageNav = new LandingPageNav()
        loginPage = new LoginPage()
        landingPageFooter = new LandingPageFooter()
      
        cy.visit('https://financevillage.netlify.app/')
    })

    it('should verify that user can access log in page', () => {
        landingPageNav.goToLogin().click()
        loginPage.validateLoginPage()
        landingPageNav.validateNavBar()
        landingPageFooter.validateFooter()
   
    })
    
})