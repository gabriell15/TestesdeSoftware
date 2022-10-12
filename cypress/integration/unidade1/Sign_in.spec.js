
/// <reference types= "cypress" />



context('Visitando a tela inicial', () => {

    before(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#data-table tbody tr').should('have.length', 0) //o ,0 é o tamanho que espera-se que tenha antes do cadastro
        
    });
    
    it('Testando opção Sign in', () => {
       // cy.get('.login').click()
        
    });

    it.only('Criando conta no site', () => {

       
       // cy.get('#email_create').click().type("gabrielf@gmail.com")
        //cy.get('#SubmitCreate > span').click()
        
    });

    
});