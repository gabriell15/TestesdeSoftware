Funcionalidade: Testes da tela de Employments Status

    Background:
        Dado que o usuário está na tela de login do site
        Quando o usuário loga no site
        E clica na opção '<Admin>'
    
    Cenário: Redirecionamento para URL correta
        Então a tela de Admin é apresentada
        Quando clica na opção '<Job>'
        Então ele deve observar que as opções '<Job Titles>' , '<Pay Grades>' , '<Employment Status>' , '<Job Categories>' , '<Work Shifts>' estão disponíveis 
        Quando clica na opção '<Employment Status>'
        Então deve ser redirecionado para a página de Employment Status

    Cenário: Editar status de emprego
        Então a tela de Admin é apresentada
        Quando clica na opção '<Job>'
        E clica na opção '<Employment Status>'
        Quando clica na opção de edição
        E preenche o campo obrigatório
        E clica no botão '<Save>'
        Então a edição é efetuada e apresentada na lista de cadastros
    