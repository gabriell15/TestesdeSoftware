Funcionalidade: Testes da tela de Termination Reasons

    Background:
        Dado que o usuário está na tela de login do site
        Quando o usuário loga no site
        E clica na opção '<Admin>'
    
    Cenário: Cadastro, Edição e Remoção de Termination Reasons
        Então a tela de Admin é apresentada
        Quando clica na opção '<PIM>'
        E clica na opção '<Configuration>'
        Quando clica na opção '<Termination Reasons>'
        Então a tela de Termination Reasons é apresentada
        Quando preenche o campo obrigatório
        E clica no botão '<Save>'
        Então o cadastro é efetuado e apresentada na lista de cadastros

        Quando clica na opção de edição
        E preenche o campo editado
        E clica no botão '<Save>'
        Então a edição é efetuada e apresentada na lista de cadastros

        Quando clica na opção de remoção
        E confirma a remoção clicando no botão '<Yes, Delete>'
        Então a opção selecionada é removida e não se apresenta mais na lista de cadastros

