const express = require('express')
const morgan = require('morgan')


const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan(dev))

const routerIglesia = require('./routes/iglesias.routes')
const routerTipoUsuario = require('./routes/tipoUsuario.routes')
const routerUsuario = require('./routes/usuarios.routes')
const routerMiembro = require('./routes/miembro.routes')
const routerTipoIngreso = require('./routes/tipoIngreso.routes')
const routerTipoEgreso = require('./routes/tipoEgreso.routes')
const routerBautismo = require('./routes/bautismo.routes')
const routerCulto = require('./routes/culto.routes')
const routerMoneda = require('./routes/moneda.routes')
const routerDiezmador = require('./routes/diezmador.routes')
const routerDiezmo = require('./routes/diezmo.routes')
const routerIngreso = require('./routes/ingreso.routes')

app.use(routerIglesia)
app.use(routerTipoUsuario)
app.use(routerUsuario)
app.use(routerMiembro)
app.use(routerTipoIngreso)
app.use(routerTipoEgreso)
app.use(routerBautismo)
app.use(routerCulto)
app.use(routerMoneda)
app.use(routerDiezmador)
app.use(routerDiezmo)
app.use(routerIngreso)

app.listen(4000, ()=>{
    console.log('Server is running on port 4000')
})