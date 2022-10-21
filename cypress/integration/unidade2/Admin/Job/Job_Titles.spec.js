context('Orange HRM', () => {

    beforeEach(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(3000)
    });

    it.only('Redirecionamento para URL correta', () => {
        

        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(1)', {timeout: 15000}).contains('Job Titles').should('be.visible').click()

        cy.url()
      .should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
      cy.wait(3000)
    });

    it('Editar trabalho', () => {
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(1)', {timeout: 15000}).click()
  
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2)', {timeout: 15000}).click()

        cy.get(':nth-child(2) > .oxd-input').click().clear().type('digital account assistant')
        cy.get('.oxd-button--secondary').contains('Save').click()
        cy.contains('digital account assistant', {timeout: 15000}).should('be.visible')

        
    });
})