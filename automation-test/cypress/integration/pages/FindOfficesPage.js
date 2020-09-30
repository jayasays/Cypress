import AboutUsPage from '../integration/pages/AboutUsPage'

class FindOfficesPage {
    constructor() {
    }

    getAllCompaniesElements(){
      return cy.get(' .card__body ')
    }

    getHomePageIcon(){
       return cy.get('.global-header__logo > a > img')
    }

    navigateToHomePage(){
       this.getHomePageIcon().click();
       cy.url().should('include','/en/') 
    }

    getAboutUsLink(){
      return cy.contains('About Us')
    }

    navigateToAboutUs(){
        this.getAboutUsLink().click({force: true})
        cy.url().should('include','/en/about-us/') 
        return new AboutUsPage();
    }
}

export default FindOfficesPage;