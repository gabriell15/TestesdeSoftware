
/// <reference types= "cypress" />



context('Orange HRM', () => {

    beforeEach(() => { //vai repetir antes de todos os testes
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
        cy.get('.oxd-button').click()
        cy.wait(3000)
    });

    it('Verificação de redirecionamento da opção Admin para URL correta', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').contains('Admin').should('be.visible').click()
        cy.wait(3000)

        cy.url()
      .should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        });
    


    it('Procurando por opção Admin', () => {
        cy.get('.oxd-main-menu-search').click().type("ad")
        cy.get('.oxd-main-menu-item').contains('Admin').should('be.visible')
        
    });

        
    it('Verificação de opções do menu horizontal superior', () => {

        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

        cy.get('.--visited', {timeout: 15000}).contains('User Management').should('be.visible')
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').contains('Job').should('be.visible')
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').contains('Organization').should('be.visible')
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').contains('Qualifications').should('be.visible')
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').contains('More').should('be.visible')
        cy.get('.oxd-grid-4 > :nth-child(1)').contains('Username').should('be.visible')
 
    });

    it('Verificação de nomes de campos a serem preenchidos', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(3000)

        cy.get('.oxd-grid-4 > :nth-child(1)').contains('Username').should('be.visible')
        cy.get('.oxd-grid-4 > :nth-child(2)').contains('User Role').should('be.visible')
        cy.get('.oxd-grid-4 > :nth-child(3)').contains('Employee Name').should('be.visible')
        cy.get('.oxd-grid-4 > :nth-child(4)').contains('Status').should('be.visible')
    });
    
    
it('Cadastrar registro', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.wait(3000)

    cy.get('.orangehrm-header-container > .oxd-button').click({force: true})
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text', {timeout: 15000}).click()
    cy.get('.oxd-select-dropdown > :nth-child(2)', {timeout: 15000}).contains('Admin').should('be.visible').click()
    cy.get('.oxd-autocomplete-text-input > input').click().type('Odis')
    cy.wait(4000)
    cy.get('.oxd-autocomplete-option').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)', {timeout: 15000}).click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Peter Silva')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('@Gabriel15')
    cy.wait(3000)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('@Gabriel15')
    cy.get('.oxd-button--secondary').contains('Save').click()
  
    cy.wait(5000)


    
});
    it('Procurar por registro incorreto', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(3000)

        cy.get(':nth-child(2) > .oxd-input').click()
        cy.get(':nth-child(2) > .oxd-input').type("Daniel")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').contains('ESS').should('be.visible').click()
        cy.get('.oxd-autocomplete-text-input > input').click().type("Daniel Oliveira")
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains('Enable').should('be.visible').click()
       cy.get('.oxd-form-actions > .oxd-button--secondary').contains('Search').click({force: true}) 
       cy.get('.orangehrm-horizontal-padding').contains('No Records Found')

    }); 

    it('Procurar por registro válido', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(3000)

        cy.get(':nth-child(2) > .oxd-input').click()
        cy.get(':nth-child(2) > .oxd-input').type("Peter Silva")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').contains('Admin').should('be.visible').click()
       cy.get('.oxd-autocomplete-text-input > input').click().type("Odis Adalwin")
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains('Enable').should('be.visible').click()
       cy.get('.oxd-form-actions > .oxd-button--secondary').contains('Search').click({force: true}) 
       cy.get('.oxd-table-card > .oxd-table-row').should('be.visible')
       cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').contains('Peter Silva').should('be.visible')
       cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div').contains('Admin').should('be.visible')
       cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').contains('Odis Adalwin').should('be.visible')
       cy.get('.oxd-table-card > .oxd-table-row > :nth-child(5) > div').contains('Enable').should('be.visible')

      
       
    }); 

    it('Verificação de redirecionamento da opção edição de cadastro', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(3000)

        cy.get(':nth-child(2) > .oxd-input').click()
        cy.get(':nth-child(2) > .oxd-input').type("Peter Silva")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').contains('Admin').should('be.visible').click()
        cy.get('.oxd-autocomplete-text-input > input').click().type("Odis Adalwin")
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains('Enable').should('be.visible').click()
       cy.get('.oxd-form-actions > .oxd-button--secondary').contains('Search').click({force: true}) 
       cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()

        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser/40')
        });



     it('Redirecionamento de cancelar edição', () => {
            cy.get(':nth-child(1) > .oxd-main-menu-item').click()

            cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)', {timeout: 15000}).click({force: true})
            cy.get('.oxd-button--ghost', {timeout: 15000}).click()
            cy.wait(4000)
            cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

        });


    it('Edição de dado ja cadastrado', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(3000)

        cy.get(':nth-child(2) > .oxd-input').click()
        cy.get(':nth-child(2) > .oxd-input').type("Peter Silva")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').contains('Admin').should('be.visible').click()
        cy.get('.oxd-autocomplete-text-input > input').click().type("Odis Adalwin")
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').contains('Enabled').should('be.visible').click()

        cy.get('.oxd-form-actions > .oxd-button--secondary').contains('Search').click({force: true}) 
        cy.get('.oxd-table-cell-actions > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-input').click().type(' Santos')
        cy.wait(3000)

       cy.get('.oxd-button--secondary').click() 
      
    
        cy.wait(6000)

    });

    it.only('Verificação de opção Reset', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(3000)
        
        cy.get(':nth-child(2) > .oxd-input').type("Daniel")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains('ESS').should('be.visible').click()
        cy.get('.oxd-autocomplete-text-input > input').click().type("Daniel Oliveira")
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains('Enable').should('be.visible').click()
        cy.get('.oxd-button--ghost').click({force: true}) 

        cy.get(':nth-child(2) > .oxd-input').should('have.value', '');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').contains('-- Select --').should('be.visible')
    
      
    });
    

    
    
    
});