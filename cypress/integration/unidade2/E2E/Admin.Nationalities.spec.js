beforeEach(() => { //vai repetir antes de todos os testes
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
    cy.get('.oxd-button').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.wait(3000)
    
});



it.only('Cadastro, Edição e Remoção de Nationalities', () => {
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1) > li').click()

    //CADASTRO
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input').click().type('Alemão')
    cy.get('.oxd-button--secondary').click()

    //VERIFICAR SE FOI CADASTRADO
    cy.get('.orangehrm-container', {timeout: 15000}).contains('Alemão').should('be.visible')

    //EDITAR
    cy.get(':nth-child(3) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2)').click()
    cy.get(':nth-child(2) > .oxd-input').click().clear().type('Brasileiro')
    cy.get('.oxd-button--secondary').click()

    //VERIFICAR SE FOI EDITADO
    cy.get('.orangehrm-container', {timeout: 15000}).contains('Brasileiro').should('be.visible')

    //REMOVER
    cy.get(':nth-child(26) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1)').click()
    cy.get('.oxd-button--label-danger').click()


    //VERIFICAR SE FOI REMOVIDO
    cy.wait(5000)
    cy.get('.orangehrm-container').contains('Brasileiro').should('not.exist')

   
    
});