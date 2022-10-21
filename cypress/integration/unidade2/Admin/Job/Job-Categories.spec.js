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
        cy.get('.oxd-dropdown-menu > :nth-child(4)', {timeout: 15000}).contains('Job Categories').should('be.visible').click()

        cy.url()
      .should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/jobCategory')
      cy.wait(3000)

    });

    it.only('Editar Job Category', () => {
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(4)', {timeout: 15000}).click()
        cy.wait(3000)

        cy.get(':nth-child(1) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-input').click().clear().type('Engenheiro')
        cy.wait(2000)

        cy.get('.oxd-button--secondary').contains('Save').click()
       
       
        cy.contains('Engenheiro', {timeout: 15000}).should('be.visible')
        
    });

   
    

})