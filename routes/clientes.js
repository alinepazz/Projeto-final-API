const express = require('express');
const router = express.Router();
const controller = require('../controllers/ClientesController')
const jwt = require('jsonwebtoken')



router.post('', controller.add)
router.post('/:clienteId/servicos', controller.addServico)












module.exports = router