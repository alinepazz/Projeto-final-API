require('dotenv-safe').load();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const clientes = require('./src/routes/clientes')
const port = process.env.PORT || 3001




app.use(bodyParser.json())

app.use('/clientes', clientes)

app.get('/', (request, response) => {
    response.send('Olá Mundo!')
})

app.listen(port)
console.info(`Rodando na porta ${port}`)