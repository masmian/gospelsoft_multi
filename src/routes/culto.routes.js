const { Router } = require('express')
const { getAllCults, getCult, registerCult, editCult } = require('../controlers/culto.controler')

const routerCult = Router()

routerCult.get('/api/Cult', getAllCults)

routerCult.get('/api/Cult/:id', getCult)

routerCult.post('/api/Cult',registerCult)

routerCult.put('/api/Cult/:id', editCult)


module.exports = routerCult