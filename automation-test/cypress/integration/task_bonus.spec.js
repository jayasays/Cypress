
//<reference types="Cypress"/>

describe('mdgroup website', function()
{
    it('end to end journey test', function(){
        cy.request('GET','https://deckofcardsapi.com/api/deck/new/draw/?count=12').then((response) =>{
            expect(response.status).equal(200)
            const responseBody = response.body;
            expect(responseBody.cards.length).to.equal(12);
            expect(responseBody.remaining).to.equal(40)

            const firstCard = responseBody.cards[0];
            expect(firstCard).to.have.property('code');
            expect(firstCard).to.have.property('value');
            expect(firstCard).to.have.property('suit');

            cy.writeFile('cypress/fixtures/cards.json', responseBody);
                               
            
        })

    })

})