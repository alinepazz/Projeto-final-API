const { connect } = require('../models/Repository')
const { servicosModel } = require('../models/ServicosSchema')

connect()








const add = (request, response) => {
    const novoServico = new servicosModel(request.body)

    novoServico.save((error) => {
        if(error) {
            return response.status(500).send(error)
        }
        return response.status(201).send(novoServico)
    })
}


module.exports = {
    add
}