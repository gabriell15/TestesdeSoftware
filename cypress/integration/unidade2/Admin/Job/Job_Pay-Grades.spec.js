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
        cy.get('.oxd-dropdown-menu > :nth-child(2)', {timeout: 15000}).contains('Pay Grades').should('be.visible').click()

        cy.url()
      .should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewPayGrades')
      cy.wait(3000)

    });

    it('Editar nome de Nota de Pagamento', () => {
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(2)', {timeout: 15000}).click()
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2)', {timeout: 15000}).click()
        cy.get(':nth-child(2) > .oxd-input', {timeout: 15000}).click().clear().type("Grade 10")
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()

        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)', {timeout: 15000}).click()

       
        cy.get('.oxd-dropdown-menu > :nth-child(2)', {timeout: 15000}).click()

        cy.contains('Grade 10', {timeout: 15000}).should('be.visible')
        
    });

    it.only('Editar Salario Minimo e Salario Maximo', () => {
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(2)', {timeout: 15000}).click()

        cy.get(':nth-child(1) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2)', {timeout: 15000}).click()

        cy.get('.oxd-table-cell-actions > :nth-child(2)', {timeout: 15000}).click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().clear().type('35000')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type('55000')
        cy.get(':nth-child(2) > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click()
        cy.wait(3000)
        cy.get('.oxd-table-row > :nth-child(3) > div',).contains('35000.00')
        cy.get(':nth-child(4) > div').contains('55000.00')

    });
    

})