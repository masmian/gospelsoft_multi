const { Router } = require('express')
const { getAllCurrencies, getCurrency, registerCurrency, editCurrency } = require('../controlers/moneda.controler')

const routerMoneda = Router()

routerMoneda.get('/api/moneda', getAllCurrencies)

routerMoneda.get('/api/moneda/:id', getCurrency)

routerMoneda.post('/api/moneda',registerCurrency)

routerMoneda.put('/api/moneda/:id', editCurrency)


module.exports = routerMoneda