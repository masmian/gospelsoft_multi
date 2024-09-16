const { Router } = require('express')
const { getAllBaptisms, getBaptism, registerBaptism, editBaptism, deleteBaptism } = require('../controlers/bautismo.controler')
const routerBautismo = Router()

routerBautismo.get('/api/bautismos', getAllBaptisms)

routerBautismo.get('/api/bautismos/:id', getBaptism)

routerBautismo.post('/api/bautismos',registerBaptism)

routerBautismo.put('/api/bautismos/:id', editBaptism)

routerBautismo.delete('/api/bautismos/:id', deleteBaptism)

module.exports = routerBautismo