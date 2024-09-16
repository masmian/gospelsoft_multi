const { Router } = require('express')
const { getAllIncomes, getIncome, registerIncome, editIncome } = require('../controlers/ingreso.controler')

const routerIngreso = Router()

routerIngreso.get('/api/ingreso', getAllIncomes)

routerIngreso.get('/api/ingreso/:id', getIncome)

routerIngreso.post('/api/ingreso',registerIncome)

routerIngreso.put('/api/ingreso/:id', editIncome)


module.exports = routerIngreso