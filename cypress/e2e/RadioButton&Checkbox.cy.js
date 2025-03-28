describe("Check UI Element", () =>{
    // it("Checking Radio Buttons", () =>{
    //     cy.visit("https://testautomationpractice.blogspot.com/")
        
    //     //visibility of radio button
    //     cy.get('#male').should('be.visible')
    //     cy.get('#female').should('be.visible')

    //     //selecting radio buttons
    //     cy.get('#male').check().should('be.checked')
    //     cy.get('#female').should('not.be.checked')


    // })

    //Visibility of element
    it("Checking Checkbox Buttons", () =>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input#monday").should("be.visible")

        //selecting single checkboxes
        cy.get("input#monday").check().should("be.checked")

        //unchecking checkbox
        cy.get("input#monday").uncheck().should("not.be.checked")

        // select all checkbox at once
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")

        //Unselect all checkbox at once
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")


        //Select 1st checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()


    })
})