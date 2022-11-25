Funcionalidade: Testes da tela principal

    Background:
        Dado que o usuário está na tela de login do site
        Quando o usuário loga no site

    Cenário: Verificação de redirecionamento da opção Admin para URL correta
        E clica na opção '<Admin>' 
        Então deve ser redirecionado para a página de Admin

    Cenario: Procurando por opção Admin
        Quando o usuário clica na opção '<Search>'
        E preenche com o valor 'ad'
        Então a opção '<Admin>' é apresentada ao usuário

    Cenário: Verificação de opções do menu horizontal superior
        E clica na opção '<Admin>' 
        Então ele deve observa que as opções '<User Management>' , '<Job>' , '<Organization>' , '<Qualifications>' , '<More>' estão disponíveis no menu superior

    Cenário: Verificação de nomes de campos a serem preenchidos
        E clica na opção '<Admin>' 
        Então o usuário deve observar que os nomes '<Username>' , '<User Role>' , '<Employee Name>' , '<Status>' dos campos estão disponíveis

    Cenário: Cadastrar registro
        E clica na opção '<Admin>' 
        Quando clica na opção '<+add>'
        Então a tela de cadastro é apresentada
        Quando preenche os campos obrigatórios
        E clica na opção '<Save>'
        Então o cadastro é efetuado
    
    Cenário: Procurar por registro incorreto
        E clica na opção '<Admin>' 
        E preenche os campos com informações inexistentes
        Quando clica na opção '<Search>'
        Então uma mensagem que nenhum registro foi encontrado deve ser exibido
    
    Cenário: Procurar por registro válidos
        E clica na opção '<Admin>' 
        E preenche os campos com informações existentes
        Quando clica na opção '<Search>'
        Então a mensagem que 1 registro foi encontrado deve ser exibido junto com as informações do registro


    Cenário: Verificação de redirecionamento da opção edição de cadastro para URL correta
        E clica na opção '<Admin>' 
        E preenche os campos com informações existentes
        Quando clica na opção '<Search>'
        Então a mensagem que 1 registro foi encontrado deve ser exibido junto com as informações do registro
        Quando o usuário aciona a opção de edição
        Então deve ser redirecionado para a página de edição de cadastro


    Cenário: Redirecionamento de cancelar edição
        E clica na opção '<Admin>'
        Quando o usuário aciona a opção de edição do cadastro listado
        Então Então a tela de edição é apresentada
        Quando o usuário clica na opção '<Cancel>'
        Então é redirecionado para a página anterior


    Cenário: Edição de dado ja cadastrado
        E clica na opção '<Admin>'
        Quando o usuário aciona a opção de edição do cadastro listado
        Então a tela de edição é apresentada
        Quando preenche o campo '<Username*>'
        E clica na opção '<Save>'
        Então a edição é efetuada e apresentada na lista de cadastros
    

    Cenário: Verificação de opção Reset
         E clica na opção '<Admin>'
         E preenche os campos 
         Quando o usuário clica na opção '<Reset>'
         Então os campos que foram preenchidos ficam em branco

