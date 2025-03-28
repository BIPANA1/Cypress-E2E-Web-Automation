describe("Learn Dropdown", ()=>{
    it.skip("Dropdown", () =>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#country')
        .select('usa')
        .should('have.value','usa')

    })

    it.skip("Dropdown", () =>
        {
            cy.visit("https://testautomationpractice.blogspot.com/")
            cy.get('#country')
            .select('canada')
            .should('have.value','canada')
    
        })

    it.skip("Auto Suggest Search", () =>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Nepal")
        cy.get('.suggestion-title').contains('Nepali Army').click()
        

    })

    it("Dynamically Suggest Search", () =>{
        cy.visit("https://www.google.com/")

        cy.get("input[name='q']").type('cypress automation')
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length','11')
        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text()=='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }

        })
        cy.get('div.wM6W7d>span').should('have.value','cypress automation tool')
    
    })
})