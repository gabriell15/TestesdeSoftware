context('Orange HRM', () => {

    beforeEach(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
        cy.wait(3000)
       
    });



    it.only('Cadastro, Edição e Remoção de Termination Reasons', () => {
        
        
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get('.--parent', {timeout: 15000}).click()
        cy.wait(3000)

        cy.get('.oxd-dropdown-menu > :nth-child(5)').click({force: true})

        //CADASTRO
        cy.get('.oxd-button', {timeout: 15000}).click()
        cy.get(':nth-child(2) > .oxd-input').click().type('Recém-contratado')
        cy.get('.oxd-button--secondary').click()
        cy.wait(3000)

        //VERIFICAR SE FOI CADASTRADO
        
        cy.get('.orangehrm-container').contains('Recém-contratado').should('be.visible')


        //EDITAR
        cy.get(':nth-child(7) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-input').click().clear().type('Contrato renovado')
        cy.get('.oxd-button--secondary').click()

        //VERIFICAR SE FOI EDITADO

        cy.contains('Contrato renovado', {timeout: 15000}).should('be.visible')

         //REMOVER

         cy.get(':nth-child(2) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1)').click()
         cy.get('.oxd-button--label-danger').click()
         cy.wait(4000)
 
         //VERIFICAR SE FOI REMOVIDO
         cy.get('.orangehrm-container').contains('Contrato renovado').should('not.exist')

    });

        


        
   

   

  
   
    

})