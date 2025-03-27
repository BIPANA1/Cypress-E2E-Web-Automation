describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Implicit Assertion
    
    // should  and
    cy.url().should('include','orangehrmlive')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm')


    cy.title().should('include','Orange')
    .and('eq',"OrangeHRM")
    .and('contain',"HRM")


    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist')
  
    //check number of links using Xpath

    cy.xpath("//a").should('have.length','5')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value',"Admin").clear()
    
    //with placeholder name

    cy.get("input[placeholder='Username']").type("Admin")
    .should("have.value","Admin")

  
  })
})