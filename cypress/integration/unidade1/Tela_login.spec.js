
/// <reference types= "cypress" />



context('Orange HRM', () => {

    beforeEach(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
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
     
    });


    it.only('Verificar redirecionamento de opção Forgot your password? para URL', () => {
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        cy.url()
        .should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        
    });

    it.only('Recuperando senha', () => {
      
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        cy.get('.oxd-input').click().type("Admin")
        cy.get('.oxd-button--secondary').click()
        cy.contains('Reset Password link sent successfully').should('be.visible')
        
    });
    
    
});