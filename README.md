# Rocketseat-omnistack



Inicializando o projeto (React + React Native + Node):
********** AULA 1 **********  
1. Instalação do Node (Versão LTS) <br>
1.1 Other downloads -> Installing Node.js via package manager -> Windows -> Chocolatey (Gerenciador de pacotes) -> Install -> (Após ter instalado o chocolatey) cinst nodejs.install --version 10.16.3
<br>// node -v : para verificar a versão atual do node
2. Instalação do Yarn  <br>// funciona como o NPM<br>
2.1 choco install yarn <br>// CINST = CHOCO INSTALL
3. Instalação do Visual Studio Code
3.1 instalar plugins: Dracula Official (set color theme), Material Icon Theme, Rocketseat React Native, Fira Code (No github, procurar por Download, abrir a pasta ttf e dar um duplo clique, No VSC: code, preferences, settings, json (icone do arquivo), incluir as informações: "editor.fontFamily": "Fira Code", "editor.fontligatures": true )

********** AULA 2 ********** 
--> BACKEND 
1. yarn init -y (para iniciar o seu repositório)
2. package.json: arquivo de configurações responsavel por armazenar as dependências (CTRL + ': abrir terminal)
3. No backend: yarn add express
4. Para iniciar a aplicação basta, na pasta backend, dar um node: src/server.js
5. Instalar dependência Nodemon através do comando -> yarn add nodemon -D (ele serve para verificar se houve alterações e reiniciará o servidor)
6. Para rodar sua aplicação na porta definida no server.js basta dar um yarn dev (ou npm run dev se você estiver utilizando o node)
7. Para analisar rotas, nesse curso iremos utilizar a ferramenta Insomnia Rest (ou postman caso vc nao tenha um sistema que suporte 64bits+)
8. Ferramenta: MongoDB Atlás (realizar o cadastro e as configurações de um servidor gratuito)
9. adicionar uma nova dependência do mongodb: yarn add mongoose 
10. Verificar se você tem acesso a porta do mongo: http://portquiz.net:27017 
11. Instalar uma lib que permite gerenciar o recebimento de arquivos multipart (para enviarmos imagens ao backend): yarn add multer
12. Header é responsável por realizar a autenticação do usuário (para que ele nao seja enviado mais de uma vez)


********** AULA 3 **********
1. npx create-react-app frontend
2. yarn start (deixe o backend rodando com yarn dev)
3. ********** MINUTO 10:17 da aula 3 **********


// GIT COMMIT -m -S         EMITE COMMITS COM O SINAL DE CERTIFICADO, ou seja, de uma fonte confiável    <br>https://help.github.com/en/articles/telling-git-about-your-signing-key
<br>https://help.github.com/en/articles/signing-commits


//PAREI EM 01:06:00 da segunda AULA (VERIFICAR PQ SALVOU O ARQUIVO COMO UNDEFINED)