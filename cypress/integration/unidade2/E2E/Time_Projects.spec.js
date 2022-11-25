beforeEach(() => { //vai repetir antes de todos os testes
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
    cy.get('.oxd-button').click()
    cy.wait(3000)
    //cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    //cy.wait(3000)
    
});

it.only('Cadastro, Edição e Remoção de Projects', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)
    

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()

    //CADASTRO
    cy.wait(3000)
    cy.get('.orangehrm-header-container > .oxd-button').click({force: true})
    cy.get(':nth-child(2) > .oxd-input', {timeout: 15000}).click().type('Red Bull - Fase 1')
    cy.get('.oxd-form > :nth-child(1) > :nth-child(2) > .oxd-button').click()
    cy.get('.oxd-form > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Red Bull F7')
    cy.get('.oxd-form > :nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper').click()
    cy.wait(2000)
    cy.get('.oxd-sheet > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click({ multiple: true })
    cy.get('.oxd-sheet > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-sheet > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-sheet > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-sheet > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-sheet > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.wait(3000)
 
    cy.get('.oxd-button--secondary').click( {force: true} )
    cy.wait(4000)

   //VERIFICAR CADASTRO

   cy.wait(3000)
   cy.get('.orangehrm-container', {timeout: 15000}).contains('Red Bull F7').should('be.visible')
   cy.get('.orangehrm-container', {timeout: 15000}).contains('Red Bull - Fase 1').should('be.visible')

    //EDIÇÃO
    cy.get(':nth-child(11) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2)').click()
     cy.get('.orangehrm-project-admin-input > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input', {timeout: 15000}).click().type('ke')
     cy.wait(3000)
     cy.get('.oxd-autocomplete-dropdown > :nth-child(1)', {timeout: 15000}).click()
     cy.get('.oxd-form-actions > .oxd-button--secondary').click()
     cy.wait(3000)

     //VERIFICAR EDIÇÃO
     cy.wait(3000)
     cy.get(':nth-child(11) > .oxd-table-row', {timeout: 15000}).contains('Red Bull F7').should('be.visible')
     cy.get(':nth-child(11) > .oxd-table-row',  {timeout: 15000}).contains('Red Bull - Fase 1').should('be.visible')
   

     //REMOÇÃO
     cy.wait(3000)
     cy.get(':nth-child(11) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)').click()
     cy.get('.oxd-button--label-danger').click()

     //VERIFICAR REMOÇÃO
     cy.wait(3000)
     cy.get('.orangehrm-container').contains('Red Bull F7').should('not.exist')
    
});

it('Verificar cadastro', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)
    //aproveita a partir daqui
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.wait(3000)
    cy.get('.orangehrm-container', {timeout: 15000}).contains('Red Bull F7').should('be.visible')
    cy.get('.orangehrm-container', {timeout: 15000}).contains('Red Bull - Fase 1').should('be.visible')


    
});

it('editar', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
     //aproveita a partir daqui
     cy.get(':nth-child(11) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2)').click()
     cy.get('.orangehrm-project-admin-input > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input', {timeout: 15000}).click().type('ke')
     cy.wait(3000)
     cy.get('.oxd-autocomplete-dropdown > :nth-child(1)', {timeout: 15000}).click()
     cy.get('.oxd-form-actions > .oxd-button--secondary').click()
     cy.wait(3000)
    
});

it('verificar edição', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
     //aproveita a partir daqui
     cy.wait(3000)
    cy.get(':nth-child(11) > .oxd-table-row', {timeout: 15000}).contains('Red Bull F7').should('be.visible')
    cy.get(':nth-child(11) > .oxd-table-row',  {timeout: 15000}).contains('Red Bull - Fase 1').should('be.visible')
    cy.get(':nth-child(11) > .oxd-table-row',  {timeout: 15000}).contains('Kevin Mathews').should('be.visible')

});

it('Remover', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
     //aproveita a partir daqui
     cy.wait(3000)
     cy.get(':nth-child(11) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)').click()
     cy.get('.oxd-button--label-danger').click()


    
});

it('Verificar remoção', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
     //aproveita a partir daqui
     cy.wait(3000)
     cy.get('.orangehrm-container').contains('Red Bull F7').should('not.exist')
    
});

