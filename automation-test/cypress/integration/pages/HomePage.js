import FindOfficesPage from '../integration/pages/FindOfficesPage';

class HomePage {
    constructor() {
    }
  
    visit() {
      cy.visit('/');
    }
  
    getFindOfficesElement() {
      return cy.get(':nth-child(2) > .nav > :nth-child(1) > .link > span');
    }

    navigateOfficesPage(){
       this.getFindOfficesElement().click(); 
       cy.url().should('include','/find-our-offices/')
       return new FindOfficesPage();

    }

    assertHomePageUrl(){
        cy.url().should('include','https')
                .should('include','/en/')    
    }
   
  }
  
  export default HomePage;