describe('Handling frames',()=>{
    it('approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('.tox-notification__dismiss').click()
        const iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        iframe.clear().type("Welcome");

})    
    })