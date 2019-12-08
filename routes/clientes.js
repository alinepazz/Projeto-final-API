const express = require('express');
const router = express.Router();
const controller = require('../controllers/ClientesController')
const jwt = require('jsonwebtoken')



router.post('', controller.add)












module.exports = router