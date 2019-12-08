const { connect } = require('../models/Repository')
const ClientesModel = require('../models/ClientesSchema')
const { servicosModel } = require('../models/ServicosSchema')
const bcrypt = require ('bcryptjs')
const jwt = require  ('jsonwebtoken')

connect()


const add = (request, response) => {
    const novoCliente = new ClientesModel(request.body)

    novoCliente.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }
        return response.status(201).send(novoCliente)
    })
}

module.exports = {
    add
}