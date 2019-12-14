const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfissionalSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true, required: true},
    nome: {type: String, required: true},
    email: {type: String, required: true},
})

const ProfissionalModel = mongoose.model('profissional', ProfissionalSchema);

module.exports = { ProfissionalModel, ProfissionalSchema };