
const express = require('express');
const router = express.Router();
const controller = require('../controllers/ClientesController')
const jwt = require('jsonwebtoken')
const SEGREDO = process.env.SEGREDO


const autenticarAdmin = (request, response, next) => {
    const authHeader = request.get('authorization')
    let autenticado = false

    if (!authHeader) {
        return response.status(401).send("Você precisa fazer login!")
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(token, SEGREDO, (error, decoded) => {
        if (error) {
            autenticado = false
        } else {
            if(decoded.grupo == 'admin') {
                autenticado = true
            }else{
                autenticado = false
            }
        }
    })
    if (!autenticado) {
        return response.status(403).send('Acesso negado!')
    }
    next()
}


router.post('/admin', controller.addAdmin)
router.post('',autenticarAdmin, controller.add)
router.get('', autenticarAdmin, controller.getAll)
router.get('/:id', autenticarAdmin, controller.getById)
router.patch('/:id', autenticarAdmin, controller.update)
router.delete('/:id', autenticarAdmin, controller.remove)
router.post('/:clienteId/servicos', autenticarAdmin, controller.addServico)
router.get('/:id/servicos', autenticarAdmin, controller.getServicos)
router.get('/:clienteId/servicos/:servicoId', autenticarAdmin, controller.getServicoById)
router.patch('/:clienteId/servicos/:servicoId', autenticarAdmin, controller.updateServico)
router.delete('/:clienteId/servicos/:servicoId', autenticarAdmin, controller.removeServico)
router.post('/login', controller.login)













module.exports = router