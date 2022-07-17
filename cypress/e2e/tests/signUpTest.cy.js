/**
 * Author: Olayide
 */
import LandingPageNav from "../pageObjects/common/landingPageNav";
import LandingPageFooter from "../pageObjects/common/landingPageFooter";
import LoginPage from "../pageObjects/user/loginPage";
import SignUpPage from "../pageObjects/user/signUpPage";

let landingPageNav;
let loginPage;
let landingPageFooter;
let signUpPage;

describe('Sign up', () => {
    before(() => {
        landingPageNav = new LandingPageNav()
        loginPage = new LoginPage()
        landingPageFooter = new LandingPageFooter()
        signUpPage = new SignUpPage()
        cy.visit('https://financevillage.netlify.app/')
    })

    it('should verify that user can access sign up page', () => {
        landingPageNav.goToJoinUs().click()
        landingPageNav.validateNavBar()
        landingPageFooter.validateFooter()
        signUpPage.validateSignUpPackages()
        
    })

    it('should verify that user can select a free package before sign up', () => {
        signUpPage.chooseFreePackage()
        
    })
})