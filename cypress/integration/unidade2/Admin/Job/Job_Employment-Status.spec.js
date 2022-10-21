context('Orange HRM', () => {

    beforeEach(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .oxd-main-menu-item', {timeout: 15000}).click()
        cy.wait(3000)
    });

    it('Redirecionamento para URL correta', () => {
        

        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(3)', {timeout: 15000}).contains('Employment Status').should('be.visible').click()

        cy.url()
      .should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus')
      cy.wait(3000)

    });

    it.only('Editar status de emprego', () => {
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(3)', {timeout: 15000}).click()

        cy.get(':nth-child(1) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2)', {timeout: 15000}).click()
        cy.get(':nth-child(2) > .oxd-input').click().clear().type("Estagiario em tempo integral")

        cy.get('.oxd-button--secondary', {timeout: 15000}).contains('Save').click()
       

        cy.contains('Estagiario em tempo integral', {timeout: 15000}).should('be.visible')
        
    });

  
   
    

})