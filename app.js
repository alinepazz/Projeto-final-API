
const express = require('express')
require('dotenv-safe').config();
const app = express()
const bodyParser = require('body-parser')

const clientes = require('./src/routes/clientes')

const port = process.env.PORT || 3001




app.use(bodyParser.json())

app.use('/clientes', clientes)

app.get('/', (request, response) => {
    response.send('Sistema de gerenciamento de clientes para micro empreendedores da Area da Estética Capilar!')
})

app.listen(port,function(){
console.info(`Rodando na porta ${port}`)
})