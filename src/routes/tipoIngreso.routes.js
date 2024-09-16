const { Router } = require('express')
const { getAllIncomeTypes, getIncomeType, registerIncomeType, editIncomeType, deleteIncomeType } = require('../controlers/tipoIngreso.controler')

const routerTipoIngreso = Router()

routerTipoIngreso.get('/api/tipo_ingreso', getAllIncomeTypes)

routerTipoIngreso.get('/api/tipo_ingreso/:id', getIncomeType)

routerTipoIngreso.post('/api/tipo_ingreso',registerIncomeType)

routerTipoIngreso.put('/api/tipo_ingreso/:id', editIncomeType)

routerTipoIngreso.delete('/api/tipo_ingreso/:id', deleteIncomeType)

module.exports = routerTipoIngreso