const { Router } = require('express')
const { getAllTithes, getTithe, registerTithe, editTithe } = require('../controlers/diezmo.controler')

const routerDiezmo = Router()

routerDiezmo.get('/api/diezmador', getAllTithes)

routerDiezmo.get('/api/diezmador/:id', getTithe)

routerDiezmo.post('/api/diezmador',registerTithe)

routerDiezmo.put('/api/diezmador/:id', editTithe)


module.exports = routerDiezmo