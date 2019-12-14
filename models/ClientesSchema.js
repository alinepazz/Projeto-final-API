const mongoose = require('mongoose');
const { ServicosSchema } = require('./ServicosSchema')
const { ProfissionalSchema } = require('./ProfissionalSchema')
const Schema = mongoose.Schema;
const ClientesSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    contato: { type: String, required: true },
    data_nascimento: { type: Date, required: false },
    ultima_visita: { type: Date, require: false, default: Date.now},
    servicos: [ServicosSchema],
    senha: { type: String, required: false },
    grupo: { type: String },
    profissional: [ProfissionalSchema]
})

const clientesModel = mongoose.model('clientes', ClientesSchema);

module.exports = clientesModel;