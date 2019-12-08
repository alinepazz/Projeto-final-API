const { connect } = require('../models/Repository')
const ClientesModel = require('../models/ClientesSchema')
const { servicosModel } = require('../models/ServicosSchema')
const bcrypt = require ('bcryptjs')
const jwt = require  ('jsonwebtoken')

connect()