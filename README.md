# Reprograma-projeto-final-API
# API-Gerenciamento de clientes para Micro-empreendedores! 


Como projeto final do bootcamp {reprograma}, essa API tem como proposta auxiliar micro empreendedores da área da beleza, a gerenciar informações dos seus clientes.

## TECNOLOGIAS UTILIZADAS
- Baixe e instale o NodeJS no <a href = "https://nodejs.org/en/">site oficial</a>; 
- Utilize NPM para o download dos pacotes;
- <a href = "https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-4.0.1-signed.msi/download"> MongoDB (banco de dados NoSQL)</a>. 
Ao instalar, desmarque a opção "Install MongoDB Compass". Crie uma pasta no drive C "data" e dentro dela "db". 
<a href = "https://treehouse.github.io/installation-guides/mac/mongo-mac.html"> Aqui</a>
você encontra a instalação no MAC pela linha de comando;
- <a href = "https://www.getpostman.com/downloads/"> Postman</a>.
- Robô T3 para criação do banco de dados e collection. Baixe no <a href = "https://robomongo.org/download" >site oficial</a>.

### PASSO A PASSO
- npm init -y;
- npm install express mongoose;
- npm install -D nodemon;
- npm install body-parser;
- no arquivo package.json inserir "index.js" no lugar de "server.js" na opção "main";
- npm install dot-env versão 6.1.0 (mudar no package.json)
- .gitignore com node_modules / .env 
- criar server.js rodando o app.js na porta 5005;
- criar o app.js com o express, exportando o app;
- rode o servidor com o comando "node server.js" no terminal e em seguida acesse "localhost:5005/" no Postman
