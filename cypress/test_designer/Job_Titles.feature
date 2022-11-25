Funcionalidade: Testes da tela de Job Titles

    Background:
        Dado que o usuário está na tela de login do site
        Quando o usuário loga no site
        E clica na opção '<Admin>'
    
    Cenário: Redirecionamento para URL correta
        Então a tela de Admin é apresentada
        Quando clica na opção '<Job>'
        Então ele deve observar que as opções '<Job Titles>' , '<Pay Grades>' , '<Employment Status>' , '<Job Categories>' , '<Work Shifts>' estão disponíveis 
        Quando clica na opção '<Job Titles>'
        Então deve ser redirecionado para a página de Job Titles

    Cenário: Editar trabalho
        Então a tela de Admin é apresentada
        Quando clica na opção '<Job>'
        E clica na opção '<Job Titles>'
        Quando clica na opção de edição 
        E preenche o campo a ser editado
        E clica no botão '<Save>'
        Então a edição é efetuada e apresentada na lista de cadastros
