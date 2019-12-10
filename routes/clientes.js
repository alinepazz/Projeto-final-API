const express = require('express');
const router = express.Router();
const controller = require('../controllers/ClientesController')
const jwt = require('jsonwebtoken')



router.post('', controller.add)
router.get('', controller.getAll)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)
router.post('/:clienteId/servicos', controller.addServico)
router.get('/:id/servicos', controller.getServicos)
router.get('/:clienteId/servicos/:servicoId', controller.getServicoById)
router.patch('/:clienteId/servicos/:servicoId', controller.updateServico)













module.exports = router