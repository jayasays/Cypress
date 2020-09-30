class AboutUsPage{

    newsLetterElement(){
        return cy.contains('Sign up to our newsletter');
    }

    scrollToNewsLetters(){
         this.newsLetterElement().scrollIntoView();  
    }

    getEmailAdressElement(){
     return cy.get('#Email')
    }

    enterEmailAddress(email){
       return this.getEmailAdressElement().type(email,{force: true, delay: 20})
    }

    clearEmailAddress(){
      return this.getEmailAdressElement().invoke('val', '')
    }
}

export default AboutUsPage;