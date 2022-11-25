Funcionalidade: Testes da tela de Employee list

    Background:
        Dado que o usuário está na tela de login do site
        Quando o usuário loga no site
        E clica na opção '<Admin>'
    
    Cenário: Cadastro, Edição e Remoção de Termination Reasons
        Então a tela de Admin é apresentada
        Quando clica na opção '<PIM>'
        E clica na opção '<+add>'
        Então a tela de cadastro é apresentada
        Quando preenche os campos obrigatórios
        E clica no botão '<Save>'
        Então o cadastro é efetuado e apresentada na lista de cadastros

        Quando clica na opção <'Employee list'>
        E preenche o campo <'Employee id'>
        E clica no botão <'Search'>
        Então o cadastro é apresentado
        Quando clica na opção de edição
        E preenche os campos a serem editados
        E clica no botão '<Save>'
        Então a edição é efetuada e apresentada na lista de cadastros

        Quando clica na opção <'Employee list'>
        E preenche o campo <'Employee id'>
        E clica no botão <'Search'>
        Então o cadastro é apresentado
        Quando clica na opção de remoção
        E confirma a remoção clicando no botão '<Yes, Delete>'
        Então a opção selecionada é removida e não se apresenta mais na lista de cadastros

