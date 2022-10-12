
/// <reference types= "cypress" />



context('Dev Finances Agilizei', () => {

    before(() => { //vai repetir antes de todos os testes
        cy.visit('https://dev-finance.netlify.app/')
        cy.get('#data-table tbody tr').should('have.length', 0) //o ,0 é o tamanho que espera-se que tenha antes do cadastro
        
    });

    it.only('Verificação de textos', () => {

        //cy.visit('https://dev-finance.netlify.app/')
        cy.contains('Entradas').should('be.visible') //Verificando se o texto Entradas esta visivel

        
    });

    it.only('Cadastrar entradas', () => {
   

        cy.get('#transaction .button').click() //id + classe 
        cy.get('#description ').type("Mesada")   //id
        cy.get('[name=amount]').type(54)    // atributos
        cy.get('[type=date]').type('2021-03-21')  // atributos
        cy.get('button').contains('Salvar').click()   // tipo e valor
        
        cy.get('#data-table tbody tr').should('have.length', 1) //o ,1 é o tamanho que espera-se que tenha apos o cadastro
    });

    it.only('Cadastrar saídas', () => { //oonly quer dizer q so quer fazer este teste deste trecho
           // cy.visit('https://dev-finance.netlify.app/')


            cy.get('#transaction .button').click() //id + classe 
            cy.get('#description ').type("Mesada retirada")   //id
            cy.get('[name=amount]').type(-12)    // atributos
            cy.get('[type=date]').type('2021-03-21')  // atributos

    

             cy.get('button').contains('Salvar').should('be.visible').click() //Aqui ta verificando se tem o texto Salvar no botão
               // cy.get('button').contains('Salvar').click()   // tipo e valor

             //  cy.get('a.button.cancel').contains('Cancelar').click() Aqui é pra clicar no cancelar
            
            
            
          
            
        });



        it.only('Remover entradas e saídas', () => {
            const entrada = 'Contas'
            const saida = 'KinderOvo'

        cy.get('#transaction .button').click() //id + classe 
        cy.get('#description ').type(entrada)   //id
        cy.get('[name=amount]').type(100)    // atributos
        cy.get('[type=date]').type('2021-03-21')  // atributos
        cy.get('button').contains('Salvar').click()   // tipo e valor

        cy.get('#transaction .button').click() //id + classe 
        cy.get('#description ').type(saida)   //id
        cy.get('[name=amount]').type(-35)    // atributos
        cy.get('[type=date]').type('2021-03-21')  // atributos
        cy.get('button').contains('Salvar').click()   // tipo e valor


        //estrategia 1 : voltar para o elemento pai (data-index, nesse caso), e avançar para um td img attr
        cy.get('td.description'); //encontrar de forma mais específica o texto "entrada"
        cy.contains(entrada)
        .parent()
        .find('img[onclick*=remove]')
        .click() // removeu os dados que estavam salvos
        //cy.get('[data-index="1"] > :nth-child(4) > img').click() aqui é outra maneira

        cy.get('td.description'); //encontrar de forma mais específica o texto "saida"
            cy.contains(saida)
            .parent()
            .contains('-R$ 35,00').should('be.visible') // verificou se o preço do produto está correto


        // Estratégia 2 : buscar todos os irmãos do elemento, e buscar o que tem img + attr
        cy.get('td.description'); //encontrar de forma mais específica o texto "entrada"
        cy.contains(saida)
        .siblings()
        .children('img[onclick*=remove]')
        .click() // removeu os dados que estavam salvos

        

        });

        it.only('Verificar se estão na lista', () => {  // verificar se os que estão cadastrados estão na lista, no caso 2
            cy.get('#data-table tbody tr').should('have.length', 2) //o ,0 é o tamanho que espera-se que tenha antes do cadastro
            
            cy.get('td.description'); //encontrar de forma mais específica o texto "entrada"
            cy.contains('Mesada')
            .parent()
            .contains('R$ 54,00').should('be.visible') 

            cy.get('td.description'); //encontrar de forma mais específica o texto "entrada"
            cy.contains('Mesada retirada')
            .parent()
            .contains('-R$ 12,00').should('be.visible') 

           

        });

        it.only('Verificar quantias de entrada', () => {
            //cy.get('#incomeDisplay').contains('R$ 100,00').should('be.visible')

            cy.get('#balance > :nth-child(2)').contains('Entradas')
            cy.get('#balance > :nth-child(2)').contains('R$ 54,00').should('be.visible')
           
            
        });

        it.only('Verificar quantias de saida', () => {

            cy.get('#balance > :nth-child(3)').contains('Saídas')
            cy.get('#balance > :nth-child(3)').contains('-R$ 12,00').should('be.visible')

            
        });

        it.only('Verificar quantia de total', () => {
            cy.get('.total').contains('Total')
            cy.get('.total').contains('R$ 42,00').should('be.visible')
            
        });

        it.only('Tamanho 2 que se espera pra lista neste momento', () => {

            cy.get('#data-table tbody tr').should('have.length', 2)//o  é o tamanho que espera-se que tenha na lista final de "cadastros"
            
        });


     //entender o fluxo manualmente
        //mapear os elementos que vamos interagir
        //descrever as interações com o cypress    kdmem
        //adicionar as asserções que a gente precisa
       // cy.visit('https://dev-finance.netlify.app/')
    
});