
/// <reference types= "cypress" />



context('Orange HRM', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
        cy.wait(3000)
    });

    it('Verificação de logout', () => {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        
    });

    it.only('Verificação de página correta', () => {
        cy.url()
        .should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    });

    
    it('Verificando outras opções de perfil', () => {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
        cy.get('.oxd-dialog-close-button').click()
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(2) > .oxd-userdropdown-link').click()
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
        cy.get('.oxd-button--ghost').click()

        
    });

    it('Verificação de opções do menu vertical', () => {
        
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').contains('Admin').should('be.visible')
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').contains('PIM').should('be.visible')
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').contains('Leave').should('be.visible')
        cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').contains('Time').should('be.visible')
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').contains('Recruitment').should('be.visible')
        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').contains('My Info').should('be.visible')
        cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').contains('Performance').should('be.visible')
        cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').contains('Dashboard').should('be.visible')
        cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-text').contains('Directory').should('be.visible')
        cy.get(':nth-child(10) > .oxd-main-menu-item > .oxd-text').contains('Maintenance').should('be.visible')
        cy.get(':nth-child(11) > .oxd-main-menu-item > .oxd-text').contains('Buzz').should('be.visible')

    });

    it('Verificação de redirecionamento de opções do menu vertical', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').contains('Admin').should('be.visible').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .oxd-main-menu-item').contains('PIM').should('be.visible').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .oxd-main-menu-item').contains('Leave').should('be.visible').click()
        cy.wait(3000)
        cy.get(':nth-child(4) > .oxd-main-menu-item').contains('Time').should('be.visible').click()
        cy.wait(3000)
        cy.get(':nth-child(5) > .oxd-main-menu-item').contains('Recruitment').should('be.visible').click()
        cy.wait(3000)
        cy.get(':nth-child(6) > .oxd-main-menu-item').contains('My Info').should('be.visible').click()
        cy.wait(3000)
        cy.get(':nth-child(7) > .oxd-main-menu-item').contains('Performance').should('be.visible').click()
        cy.wait(3000)
        cy.get(':nth-child(8) > .oxd-main-menu-item').contains('Dashboard').should('be.visible').click()
        cy.wait(3000)
        cy.get(':nth-child(9) > .oxd-main-menu-item').contains('Directory').should('be.visible').click()
        cy.wait(3000)
        cy.get(':nth-child(10) > .oxd-main-menu-item').contains('Maintenance').should('be.visible').click()
        cy.wait(3000)
        cy.get('.oxd-button--ghost').click()
        cy.get(':nth-child(11) > .oxd-main-menu-item').contains('Buzz').should('be.visible').click()
       
    });



    
    
});