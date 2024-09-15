const { Router } = require('express')
const { getAllUserTypes, getUserType, registerUserType, editUserType, deleteUserType } = require('../controlers/tipoUsuario.controler')
const routerTipoUsuario = Router()

routerTipoUsuario.get('/api/tipo_usuario', getAllUserTypes)

routerTipoUsuario.get('/api/tipo_usuario/:id', getUserType)

routerTipoUsuario.post('/api/tipo_usuario',registerUserType)

routerTipoUsuario.put('/api/tipo_usuario/:id', editUserType)

routerTipoUsuario.delete('/api/tipo_usuario/:id', deleteUserType)

module.exports = routerTipoUsuario