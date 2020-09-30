
// <reference types="cypress" />

import HomePage from '../integration/pages/HomePage';

describe('mdgroup website', function()
{
    it('end to end journey test', function(){
     const home = new HomePage();
     home.visit()
     home.assertHomePageUrl();
     home.getFindOfficesElement()
        .contains('Find Our Offices')
        .should('be.visible')
     const officesPage = home.navigateOfficesPage(); 
     officesPage.getAllCompaniesElements().should(($p) => {
        expect($p).to.have.length(8) 
    })
    officesPage.navigateToHomePage();
    const aboutUsPage = officesPage.navigateToAboutUs();
    aboutUsPage.scrollToNewsLetters();
    aboutUsPage.enterEmailAddress('automation@test.com')
                .invoke('val')      
                .should('eq','automation@test.com')
    aboutUsPage.clearEmailAddress()
                    .should('have.value', '');   
      
    })
});