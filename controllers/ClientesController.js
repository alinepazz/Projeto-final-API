const { connect } = require('../models/Repository')
const ClientesModel = require('../models/ClientesSchema')
const { servicosModel } = require('../models/ServicosSchema')
const bcrypt = require ('bcryptjs')
const jwt = require  ('jsonwebtoken')


connect()


//Rotas para clientes

const add = (request, response) => {
    const senhaCriptografada = bcrypt.hashSync(request.body.senha)
    request.body.senha = senhaCriptografada
    const novoCliente = new ClientesModel(request.body)

    novoCliente.save((error) => {
        if (error) {
            return response.status(500).send(error)
        }
        return response.status(201).send(novoCliente)
    })
}

const getAll = (request, response) => {
    ClientesModel.find((error, clientes) => {
        if(error) {
            return response.status(500).send(error)
        }
        return response.status(200).send(clientes)
    })
}

const getById = (request, response) => {
    const id = request.params.id

    return ClientesModel.findById(id, (error, cliente) => {
        if(error) {
            return response.status(500).send(error)
        }
        if(cliente){
            return response.status(200).send(cliente)
        }
        return response.status(404).send("Cliente não encontrado!:(")
    })



}

const update = (request, response) => {
const id = request.params.id
const clienteUpdate = request.body
const options = {new : true}

ClientesModel.findByIdAndUpdate(
    id,
    clienteUpdate,
    options,
    (error, cliente) => {
        if(error) {
            return response(500).send(error)
        }
        if(cliente) {
            return response.status(200).send(cliente)
        }
        return response.status(403).send("Cliente não encontrado!:(")
    }
)
}

const remove = (request, response) => {
    const id = request.params.id

    ClientesModel.findByIdAndDelete(id, (error, cliente) => {
        if (error) {
            return response.status(500).send(error)
        }
        if (cliente) {
            return response.status(200).send('Cliente removido com sucesso!')
        }
        return response.status(404).send('Cliente não encontrado!:(')
    })
}



//Rotas para Servicos

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

const getServicos = (request, response) => {
    const clienteId = request.params.id
    ClientesModel.findById(clienteId, (error, cliente) => {
        if(error){
            return response.status(500).send(error)
        }
        if(cliente){
            return response.status(200).send(cliente.servicos)
        }
        return response.status(404).send("Cliente não encontrado.:(")
    })
}

const getServicoById = async (request, response) => {
    const clienteId = request.params.clienteId
    const servicoId = request.params.servicoId

    const cliente = await ClientesModel.findById(clienteId)
    const servico = cliente.servicos.find(servico => servico._id == servicoId)

    return response.status(200).send(servico)
}

const updateServico = (request, response) => {
const clienteId = request.params.clienteId
const servicoId = request.params.servicoId
const options = {new: true}

ClientesModel.findOneAndUpdate(
    {_id: clienteId, 'servicos._id': servicoId},
    {
        $set: {
            'servicos.$.nome':request.body.nome,
            'servicos.$.produto_utilizado':request.body.produto_utilizado
        }
    },
    options,
    (error, cliente) => {
        if (error) {
            return response.status(500).send(error)
        }
        if (cliente) {
            return response.status(200).send(cliente)
        }
        return response.status(404).send('Cliente não encontrado!:(')
    }
  )
}



module.exports = {
    add,
    getAll,
    getById,
    update,
    remove,
    addServico,
    getServicos,
    getServicoById,
    updateServico
}