const express = require('express')
const app = express()
const clientes = require('./routes/clientes')
const PORT = 3000

app.use(bodyParser.json())
app.use('/clientes', clientes)

app.get('/', (request, response) => {
    response.send('Olá Mundo!')
})

app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)