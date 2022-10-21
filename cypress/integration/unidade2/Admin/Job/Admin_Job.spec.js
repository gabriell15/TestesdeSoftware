context('Orange HRM', () => {

    beforeEach(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item', {timeout: 15000}).click()
        cy.wait(3000)
    });

    it.only('Verificação de opções de Job', () => {
        

        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
      
        cy.get('.oxd-dropdown-menu > :nth-child(1)', {timeout: 15000}).contains('Job Titles').should('be.visible')
        cy.get('.oxd-dropdown-menu > :nth-child(2)').contains('Pay Grades').should('be.visible')
        cy.get('.oxd-dropdown-menu > :nth-child(3)').contains('Employment Status').should('be.visible')
        cy.get('.oxd-dropdown-menu > :nth-child(4)').contains('Job Categories').should('be.visible')
        cy.get('.oxd-dropdown-menu > :nth-child(5)').contains('Work Shifts').should('be.visible')
     
    });
})