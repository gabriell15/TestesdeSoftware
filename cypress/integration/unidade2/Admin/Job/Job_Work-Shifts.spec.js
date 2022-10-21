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

    it('Redirecionamento para URL correta', () => {
        

        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(5)', {timeout: 15000}).contains('Work Shifts').should('be.visible').click()

        cy.url()
      .should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/workShift')
      cy.wait(3000)

    });

    it.only('Editar turno de trabalho', () => {
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(5)', {timeout: 15000}).click()
        cy.wait(3000)

        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-time-wrapper > .oxd-time-input > .oxd-input').click().clear().type('08:30 AM')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-time-wrapper > .oxd-time-input > .oxd-input').click().clear().type('06:30 PM')
        cy.get(':nth-child(4) > .oxd-grid-2', {timeout: 15000}).click()
        cy.get('.oxd-input-group > :nth-child(2) > .oxd-text').contains('10.00').should('be.visible')
        cy.get('.oxd-button--secondary').contains('Save').click()
        cy.wait(4000)
       
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(2) > div').contains('General').should('be.visible')
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(3) > div').contains('08:30').should('be.visible')
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(4) > div').contains('18:30').should('be.visible')
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(5) > div').contains('10.00').should('be.visible')

        
    });

  
   
    

})