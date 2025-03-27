describe("Learn explicit", function(){
    it('Explicit',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    let expName =" zxcv  xcvz";

    //BDD Style
    cy.get('.oxd-userdropdown-name').then( (x)=>{
        let acName = x.text()
        expect(acName).to.equal(expName)
        expect(acName).to.notEqual(expName)

        //TDD Style
        assert.equal('acName','expName')
        assert.notEqual('acName','expName')
    })


    }
    
    
    )
})