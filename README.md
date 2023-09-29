# automacao-cypress
Projeto de automação utilizando o cypress para seleção em QA.
Neste projeto foram construídos 8 casos de testes, sendo eles divididos em 4 funcionalidades do sistema.
- Cadastro de usuários: Onde temos o caso de um cadastro correto e um caso de cadastro sem preencher os campos obrigatórios.
- Login no sistema: Onde temos o caso de login com sucesso e um caso onde o usuário tenta realizar o login sem preencher os campos.
- Adicionar produto ao carrinho: Onde temos um cosa de secesso e um caso onde o usuário tenta adicionar um produto sem dar todas as informações necessárias.
- Finalizar compra: Onde temos um caso de sucesso, quando já existir produto no carrinho e um caso para quando o usuário tenta finalizar sem ter produtos no carrinho de compras

# Preparação do Ambiente
Para este projeto foram utilizados as seguintes tecnologias/ferramentas e versões:
- Node.Js v16.13.1
- Cypress v13.3.0
- Visual Studio Code

Instalação do Node
- Baixar e instalar o nvm-setup
- Executar o comando: nvm install 16.13.1
- Para verificar se a versão correta está instalada, execute o comando: node -v

Instalação do Cypress
- Dentro do diretório do projeto, abrir o terminal e rodar o comando: npm install cypress --save-dev
- Para verificar se a instalação está correta, execute o cypress com o comando: npx cypress open

Instalação do Visual Studio Code
- Entrar na página oficial e seguir os passos de instalação padrão: https://code.visualstudio.com/

# Outras Informações

Foi usado o Xpath no projeto para a captura de alguns elementos, como ele não é nativo, é necessário fazer a instalação
- Comando para instalar o xpath: npm instalar -D cypress-xpath

Foi usado a ferramenta mochawesome no projeto para fazer o report e trazer os resultados dentro do próprio projeto.
- Comando para instalar o mochawesome: npm install --save-dev mochawesome
- Comando para rodar o mochawesome: npx cypress run --reporter mochawesome

Após clonar o repositório executar o comando: npm install