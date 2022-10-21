context('Orange HRM', () => {

    beforeEach(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(3000)
    });

    it('Verificação de opções de Organiation', () => {
        
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()

        cy.wait(3000)
        cy.get('.oxd-dropdown-menu > :nth-child(1)').contains('General Information').should('be.visible')
        cy.get('.oxd-dropdown-menu > :nth-child(2)').contains('Locations').should('be.visible')
        cy.get('.oxd-dropdown-menu > :nth-child(3)').contains('Structure').should('be.visible')

        cy.wait(3000)
    });

   
})