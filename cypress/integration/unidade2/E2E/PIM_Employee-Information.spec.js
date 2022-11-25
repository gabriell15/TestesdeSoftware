context('Orange HRM', () => {

    beforeEach(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
        cy.wait(3000)
       
    });



    it.only('Cadastro, Edição e Remoção de Employee Information', () => {
        
        
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.wait(3000)

        //CADASTRO
        cy.get('.orangehrm-header-container > .oxd-button').click({force: true})
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').click().type('Gabriel')
        cy.get('.--name-grouped-field > :nth-child(2) > :nth-child(2) > .oxd-input').click().type('Ferreira')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').click().type('dos Santos')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type('0032')
        cy.get('.oxd-switch-input').click()
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Gabriel15')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('@Gabriel15')
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('@Gabriel15')
        cy.get('.oxd-button--secondary').click()
        cy.wait(3000)
      

        
        //VERIFICAR SE FOI CADASTRADO
        //cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-input').click({ multiple: true }).type('0032')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click( {force: true})
        cy.get('.oxd-table-card > .oxd-table-row').contains('0032').should('be.visible')
        cy.get('.oxd-table-card > .oxd-table-row').contains('Gabriel Ferreira').should('be.visible')


        cy.wait(3000)
        
        //EDITAR


        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-input').click().type('0032')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        cy.wait(3000)
        cy.get('.oxd-table-cell-actions > :nth-child(2)').click( {force: true})
        cy.wait(3000)

        cy.get(':nth-child(6) > .orangehrm-tabs-item').click({force: true})
        cy.wait(3000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force: true})
        
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()

        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force: true})
        cy.get(':nth-child(5) > span').click()
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force: true})
        cy.get(':nth-child(3) > span').click()
        cy.get('.oxd-form-actions > .oxd-button').click()
        cy.wait(4000)




        //VERIFICAR SE FOI EDITADO
        
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-input').click().type('0032')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click( {force: true})
        cy.wait(3000)
        cy.get('.oxd-table-card > .oxd-table-row').contains('0032').should('be.visible')
        cy.get('.oxd-table-card > .oxd-table-row').contains('Gabriel Ferreira').should('be.visible')
       cy.get('.oxd-table-card > .oxd-table-row').contains('Account Assistant').should('be.visible')
       cy.get('.oxd-table-card > .oxd-table-row').contains('Full-Time Contract').should('be.visible')
       cy.get('.oxd-table-card > .oxd-table-row').contains('Administration').should('be.visible')

      

         //REMOVER
         cy.wait(3000)
         cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
         cy.get(':nth-child(2) > .oxd-input').click().type('0032')
         cy.get('.oxd-form-actions > .oxd-button--secondary').click( {force: true})
         cy.wait(3000)
         cy.get('.oxd-table-cell-actions > :nth-child(1)').click()
         cy.get('.oxd-button--label-danger').click()
         cy.wait(4000)
 
         //VERIFICAR SE FOI REMOVIDO
         cy.get(':nth-child(2) > .oxd-input').click().clear().type('0032')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click( {force: true})
         cy.get('.orangehrm-container').contains('Gabriel Ferreira').should('not.exist')
         

    });

  

       
    
    

})