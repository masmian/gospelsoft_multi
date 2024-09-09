const { Router } = require('express')
const { getAllChurches, getChurch, registerChurch, editChurch, deactivateChurch } = require('../controlers/iglesias.controler')
const routerIglesia = Router()

routerIglesia.get('/api/iglesias', getAllChurches)

routerIglesia.get('/api/iglesias/:id', getChurch)

routerIglesia.post('/api/iglesias',registerChurch)

routerIglesia.put('/api/iglesias/:id', editChurch)

routerIglesia.patch('/api/iglesias/:id', deactivateChurch)

module.exports = routerIglesia