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




const addServico = async (request, response) => {
    const clienteId = request.params.clienteId
    const servico = request.body
    const options = { new: true }
    const novoServico = new servicosModel(servico)
    const cliente =  await ClientesModel.findById(clienteId)


    cliente.servicos.push(novoServico)
    cliente.save((error) => {
        if(error) {
            return response.status(500).send(error)
        }
        return response.status(201).send(cliente)
    })
}


module.exports = {
    add,
    addServico
}