const { Router } = require('express')
const { getAllOutputTypes, getOutputType, registerOutputType, editOutputType, changeOutputTypeState } = require('../controlers/tipoEgreso.controler')
const routerTipoEgreso = Router()

routerTipoEgreso.get('/api/tipo_egreso', getAllOutputTypes)

routerTipoEgreso.get('/api/tipo_egreso/:id', getOutputType)

routerTipoEgreso.post('/api/tipo_egreso',registerOutputType)

routerTipoEgreso.put('/api/tipo_egreso/:id', editOutputType)

routerTipoEgreso.patch('/api/tipo_egreso/:id', changeOutputTypeState)

module.exports = routerTipoEgreso