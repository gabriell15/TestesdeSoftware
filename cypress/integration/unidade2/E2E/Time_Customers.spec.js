beforeEach(() => { //vai repetir antes de todos os testes
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout: 15000}).click().type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
    cy.get('.oxd-button').click()
    cy.wait(3000)
    //cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    //cy.wait(3000)
    
});

it.only('Cadastro, Edição e Remoção de Customers', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()

    //CADASTRAR
    cy.get('.oxd-button').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > .oxd-input', {timeout: 15000}).click().type('Red Bull Racing')
    cy.get('.oxd-textarea').click().type('A Red Bull Racing, popularmente conhecida como Red Bull ou pela sua abreviação RBR e atualmente competindo como Oracle Red Bull Racing, é uma equipe de automobilismo baseada no Reino Unido que compete no Campeonato Mundial de Fórmula 1')
    cy.get('.oxd-button--secondary').click()

    //VERIFICAR CADASTRO
   
    cy.wait(3000)

    cy.get('.orangehrm-container').contains('Red Bull Racing').should('be.visible')
    cy.get('.orangehrm-container').contains('A Red Bull Racing, popularmente conhecida como Red Bull ou pela sua abreviação RBR e atualmente competindo como Oracle Red Bull Racing, é uma equipe de automobilismo baseada no Reino Unido que compete no Campeonato Mundial de Fórmula 1').should('be.visible')

    //EDITAR
    cy.wait(3000)
    cy.get(':nth-child(7) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2)').click()
    cy.get(':nth-child(2) > .oxd-input').click().clear().type('Oracle Red Bull Racing')
    cy.wait(2000)
    cy.get('.oxd-button--secondary').click({force: true})

    //VERIFICAR EDIÇÃO

    cy.wait(3000)
    cy.get('.orangehrm-container').contains('Oracle Red Bull Racing').should('be.visible')

    //REMOVER

    cy.get(':nth-child(7) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)').click()
    cy.get('.oxd-button--label-danger').click()

    //VERIFICAR REMOÇÃO
    cy.wait(3000)
    cy.get('.orangehrm-container').contains('Oracle Red Bull Racing').should('not.exist')




    
});
it('Verificar se foi cadastrado', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
  
    cy.wait(3000)

    //aqui sim vc pega pra por tudo no mesmo lugar
    cy.get('.orangehrm-container').contains('Red Bull Racing').should('be.visible')
    cy.get('.orangehrm-container').contains('A Red Bull Racing, popularmente conhecida como Red Bull ou pela sua abreviação RBR e atualmente competindo como Oracle Red Bull Racing, é uma equipe de automobilismo baseada no Reino Unido que compete no Campeonato Mundial de Fórmula 1').should('be.visible')
});
it('Editar', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
  
    cy.wait(3000)

    //aqui sim vc pega pra por tudo no mesmo lugar
    cy.get(':nth-child(7) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2)').click()
    cy.get(':nth-child(2) > .oxd-input').click().clear().type('Oracle Red Bull Racing')
    cy.wait(2000)
    cy.get('.oxd-button--secondary').click({force: true})
    cy.wait(3000)

    
});
it('Verificar se foi editado', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
  
    cy.wait(3000)

    //aqui sim vc pega pra por tudo no mesmo lugar
    cy.get('.orangehrm-container').contains('Oracle Red Bull Racing').should('be.visible')
   });

it('Remover', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
  
    cy.wait(3000)

    //aqui sim vc pega pra por tudo no mesmo lugar
    cy.get(':nth-child(7) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)').click()
    cy.get('.oxd-button--label-danger').click()
    cy.wait(3000)
   });

it('Verificar se foi removido', () => {
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.wait(3000)

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
  
    cy.wait(3000)

    //aqui sim vc pega pra por tudo no mesmo lugar
    cy.get('.orangehrm-container').contains('Oracle Red Bull Racing').should('not.exist')
   });