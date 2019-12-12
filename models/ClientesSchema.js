const mongoose = require('mongoose');
const { ServicosSchema } = require('./ServicosSchema')
const Schema = mongoose.Schema;
const ClientesSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    contato: { type: String, required: true },
    data_nascimento: { type: Date, required: false },
    ultima_visita: { type: Date, require: false },
    servicos: [ServicosSchema],
    senha: { type: String, required: false },
    grupo: { type: String }
})

const clientesModel = mongoose.model('clientes', ClientesSchema);

module.exports = clientesModel;