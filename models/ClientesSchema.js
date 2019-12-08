const mongoose = require('mongoose');
const { ServicosSchema } = require('./ServicosSchema')
const Schema = mongoose.Schema;
const ClientesSchema = new Schema({
    _id:{ type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: {type: String, required: true},
    email: {type: String, required: true},
    contato: {type: String, required: true},
    data_nascimento: { type: Date, required: true},
    ultima_visita: {type: Date, require: true},
    servicos: [ServicosSchema]
})

const clientesModel = mongoose.model('clientes', ClientesSchema);

module.exports = clientesModel;