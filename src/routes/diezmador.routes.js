const { Router } = require('express')
const { getAllDecimators, getDecimator, registerDecimator, editDecimator } = require('../controlers/diezmador.controler')

const routerDiezmador = Router()

routerDiezmador.get('/api/diezmador', getAllDecimators)

routerDiezmador.get('/api/diezmador/:id', getDecimator)

routerDiezmador.post('/api/diezmador',registerDecimator)

routerDiezmador.put('/api/diezmador/:id', editDecimator)


module.exports = routerDiezmador