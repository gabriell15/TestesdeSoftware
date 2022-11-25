Funcionalidade: Testes da tela de Work Shifts

    Background:
        Dado que o usuário está na tela de login do site
        Quando o usuário loga no site
        E clica na opção '<Admin>'
    
    Cenário: Redirecionamento para URL correta
        Então a tela de Admin é apresentada
        Quando clica na opção '<Job>'
        Então ele deve observar que as opções '<Job Titles>' , '<Pay Grades>' , '<Employment Status>' , '<Job Categories>' , '<Work Shifts>' estão disponíveis 
        Quando clica na opção '<Work Shifts>'
        Então deve ser redirecionado para a página de Work Shifts

    Cenário: Adicionar turno de trabalho
        Então a tela de Admin é apresentada
        Quando clica na opção '<Job>'
        E clica na opção '<Work Shifts>'
        Quando clica na opção '<+add>'
        Então a tela de cadastro é apresentada
        Quando preenche os campos obrigatórios
        E clica no botão '<Save>'
        Então o cadastro é efetuado e apresentada na lista de cadastros

