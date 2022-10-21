Funcionalidade: Testes da tela de login


    Background:
        Dado que o usuário está na tela de login do site

    Cenário: Verificando login com nome de usuário incorreto
        E o usuário preenche as credenciais com nome incorreto
        Quando clica na opção '<Login>'
        Então uma mensagem de aviso deve ser exibida

    Cenário: Realizando login
        E o usuário preenche as credenciais válidas
        Quando clica na opção '<Login>' 
        Então deve ser redirecionado para a tela principal logado


    Cenario: Verificar opção Forgot your password? para URL
        Quando o usuário clica na opção '<Forgot your password?>'
        Então ele deve ser redirecionado para a página com URL correta de recuperação de senha

    Cenario: Recuperando senha
        E o usuário clica na opção '<Forgot your password?>'
        E o usuário preenche o campo obrigatorio corretamente
        Quando clica na opção '<Reset Password>'
        Então uma mensagem de confirmação de recuperação de senha deve ser exibida