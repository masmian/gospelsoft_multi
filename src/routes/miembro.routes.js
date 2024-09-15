const { Router } = require('express')
const { getAllMembers, getMember, registerMember, editMember, deleteMember, changeMemberstate } = require('../controlers/miembros.controler')
const routerMembers = Router()

routerMembers.get('/api/miembros', getAllMembers)

routerMembers.get('/api/miembros/:id', getMember)

routerMembers.post('/api/miembros',registerMember)

routerMembers.put('/api/miembros/:id', editMember)

routerMembers.patch('/api/miembros/:id', changeMemberstate)

module.exports = routerMembers