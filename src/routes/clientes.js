const express = require('express');
const router = express.Router();
const controller = require('../controllers/ClientesController')
const jwt = require('jsonwebtoken')
const SEGREDO = "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAiJmzz+adglShSvmQ54idp2KSn+SEY/539IGYmlCLig01mFw53Pye3AznQyw69vba1VcDqKDtqePQriCu4vkPMwIDAQABAkAp1aDLEB629oI7OvlU33Mg+0BadZrSIPHN0Q7SW86QZYxJ3UFR4kBklqFmlHMWoKC6Hb6tI0mg6hwPo2rryt6ZAiEA5ZF+qQCifxymcgH5xsoKMgJmvdwmgcZzKzLGbqHAtu0CIQCYU/yBp8URnhJkTQxSSQOTPwqjqYfeLlBGdl9Bp7T6nwIhAKwag4ZXv3rkE7Rs3sC1Pyd2vWeg4A1ypWzBSBowkbWRAiBf2PDYUE1i8XiXHhfzqreSLieupVy1g6TFQXRcpn7s9wIgFo6ESHKPg7i3C2CTB40j9tMG3xOsrGeijHnx8e/9cfI="

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
router.get('', controller.getAll)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)
router.post('/:clienteId/servicos', autenticarAdmin, controller.addServico)
router.get('/:id/servicos', autenticarAdmin, controller.getServicos)
router.get('/:clienteId/servicos/:servicoId', autenticarAdmin, controller.getServicoById)
router.patch('/:clienteId/servicos/:servicoId', controller.updateServico)
router.delete('/:clienteId/servicos/:servicoId', controller.removeServico)
router.post('/login', controller.login)













module.exports = router