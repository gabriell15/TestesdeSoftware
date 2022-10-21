Funcionalidade: Testes da tela principal

    Background:
        Dado que o usuário está na tela de login do site
        Quando o usuário loga no site

    Cenário: Verificação de URL correta
    Então ele deve estar na página correta de tela principal

    Cenário: Verificação de logout
        Quando o usuário clica no ícone de perfil
        E clica na opção '<Logout>' 
        Então deve ser redirecionado para a tela de login

    Cenario: Verificando outras opções de perfil
        Quando o usuário clica no ícone de perfil
        E clica nas opções '<About>' , '<Support>' e '<Change Password>' 
        Então ele deve ser redirecionado para cada uma das páginas das opções escolhidas

    Cenário: Verificação de nomes das opções do menu vertical
        Então as opções '<Admin>' , '<PIM>' , '<Leave>' , '<Time>' , '<Recruitment>' , '<My Info>' , '<Performance>' , '<Dashboard>' , '<Directory>' , '<Maintenance>' , '<Buzz>' devem estar disponíveis no menu vertical 

    Cenário: Verificação de redirecionamento de opções do menu vertical
        Quando o usuário escolhe cada uma das opções do menu
        Então ele deve ser redirecionado para páginas diferentes
