
/// <reference types= "cypress" />



context('Orange HRM', () => {

    beforeEach(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#data-table tbody tr').should('have.length', 0) //o ,0 é o tamanho que espera-se que tenha antes do cadastro
        
    });

    it.only('Verificando login com nome de usuário incorreto', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("administrador")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials').should('be.visible')
    });
    
    it.only('Realizando login', () => {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
       // cy.get('#message').click().type("Meu produto nao foi enviado")
        //cy.get('#submitMessage > span').click()
        //cy.get('.alert').contains('Your message has been successfully sent to our team.').should('be.visible')

        
    });


    it.only('Verificar opção Forgot your password?', () => {
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        
    });

    it.only('Recuperando senha', () => {
      
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        cy.get('.oxd-input').click().type("Admin")
        cy.get('.oxd-button--secondary').click()
        cy.contains('Reset Password link sent successfully').should('be.visible')
        
    });
    
    
});