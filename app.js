
const express = require('express')
require('dotenv-safe').config();
const app = express()
const bodyParser = require('body-parser')

const clientes = require('./src/routes/clientes')

const port = process.env.PORT || 3001




app.use(bodyParser.json())

app.use('/clientes', clientes)

app.get('/', (request, response) => {
    response.send('Olá Mundo!')
})

app.listen(port,function(){
console.info(`Rodando na porta ${port}`)
})