const { Router } = require('express')
const { getAllUsers, getUser, registerUser, editUser, changeUserState,  } = require('../controlers/usuarios.controler')
const routerUsuarios = Router()

routerUsuarios.get('/api/usuarios', getAllUsers)

routerUsuarios.get('/api/usuarios/:id', getUser)

routerUsuarios.post('/api/usuarios',registerUser)

routerUsuarios.put('/api/usuarios/:id', editUser)

routerUsuarios.patch('/api/usuarios/:id', changeUserState)

module.exports = routerUsuarios