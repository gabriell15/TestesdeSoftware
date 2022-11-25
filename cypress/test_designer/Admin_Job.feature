Funcionalidade: Testes da tela de Admin

    Background:
        Dado que o usuário está na tela de login do site
        Quando o usuário loga no site
        E clica na opção '<Admin>'
    
    Cenário: Verificação de opções de Job
        Então a tela de Admin é apresentada
        Quando clica na opção '<Job>'
        Então ele deve observar que as opções '<Job Titles>' , '<Pay Grades>' , '<Employment Status>' , '<Job Categories>' , '<Work Shifts>' estão disponíveis 

    