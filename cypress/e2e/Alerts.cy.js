describe("Alerts", () => {
    // 1)Normal alerts: It will have some text and an 'OK' button
    it.skip("Javascript Alter",() =>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();
        // to trigger event
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })

        //Alert window automatically closed by cypress
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })

    // 2) Javascript confirm alert: It will have some text with 'ok' and 'cancel' buttons
    it.skip('JS confirm alert',() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
         cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
         })

         //To click cancel button. Note: It is automatically done by cypress but even If you want to write
         cy.on('window:confirm',()=>false); 

         //cypress automatically close alert window using button-default
        cy.get("#result").should('have.text','You clicked: Cancel')

    })



    //3) JS Prompt alert: It will have some text with text box for user input along with 'OK'

    it('JS Prompt alert',() => {
    
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) =>{
        cy.stub(win,'prompt').returns('welcome');
       })

       cy.get("button[onClick='jsPrompt()']").click();

       //cypress will automaically close prompted alert, by default it will use OK button
       cy.get('#result').should('have.text','You entered: welcome');
    })


    //4) Authenticated Alert
    //Approach-1
    it.only('Authentication alert',() =>{
        // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:"admin",password:"admin"}});
        // cy.get("div[class='example'] p").should('have.contain',"Congratulations");

    //Approach-2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain',"Congratulations");
    })

})