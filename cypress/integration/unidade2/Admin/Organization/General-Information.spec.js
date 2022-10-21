context('Orange HRM', () => {

    beforeEach(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
        cy.wait(3000)
 
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
       
    });

    it('Redirecionamento para URL correta', () => {
        
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)', {timeout: 15000}).click()
        cy.get('.oxd-dropdown-menu > :nth-child(1)', {timeout: 15000}).contains('General Information').should('be.visible').click()

        cy.url()
      .should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewOrganizationGeneralInformation')
      

    });

    it.only('Editar informações gerais da organização', () => {

        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.get('.oxd-dropdown-menu > :nth-child(1)', {timeout: 15000}).click()
        cy.get('.oxd-switch-input', {timeout: 15000}).click({force: true})
       


        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type('OrangeHRM FS')
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type('info@orangehrmFS.com')
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type('International Drive')
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type('Orlando')
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type('Florida')
        cy.get('.oxd-button').click()
        cy.wait(4000)

       
    });

  
   
    

})