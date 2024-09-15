const express = require('express')
const routerIglesia = require('./routes/iglesias.routes')
const routerTipoUsuario = require('./routes/tipoUsuario.routes')
const routerUsuario = require('./routes/usuarios.routes')
const routerMiembro = require('./routes/miembro.routes')

const app = express()
app.use(express.json())
app.use(routerIglesia)
app.use(routerTipoUsuario)
app.use(routerUsuario)
app.use(routerMiembro)

app.listen(4000, ()=>{
    console.log('Server is running on port 4000')
})