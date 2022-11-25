Funcionalidade: Testes da tela de Pay Grades

    Background:
        Dado que o usuário está na tela de login do site
        Quando o usuário loga no site
        E clica na opção '<Admin>'
    
    Cenário: Redirecionamento para URL correta
        Então a tela de Admin é apresentada
        Quando clica na opção '<Job>'
        Então ele deve observar que as opções '<Job Titles>' , '<Pay Grades>' , '<Employment Status>' , '<Job Categories>' , '<Work Shifts>' estão disponíveis 
        Quando clica na opção '<Pay Grades>'
        Então deve ser redirecionado para a página de Pay Grades

    Cenário: Editar nome de Nota de Pagamento
        Então a tela de Admin é apresentada
        Quando clica na opção '<Job>'
        E clica na opção '<Pay Grades>'
        Quando clica na opção de edição
        E preenche o campo a ser editado
        E clica no botão '<Save>'
        Então a edição é efetuada e apresentada na lista de cadastros

    Cenário: Editar Salario Minimo e Salario Maximo
        Então a tela de Admin é apresentada
        Quando clica na opção '<Job>'
        E clica na opção '<Pay Grades>'
        Quando clica na opção de edição
        E clica na opção de edição de Currencies
        Quando preenche os campos a serem editados
        E clica no botão '<Save>'
        Então a edição é efetuada e apresentada na lista de Currencies cadastrados
   