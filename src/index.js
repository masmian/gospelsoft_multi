const express = require('express')
const routerIglesia = require('./routes/iglesias.routes')

const app = express()
app.use(express.json())
app.use(routerIglesia)

app.listen(4000, ()=>{
    console.log('Server is running on port 3000')
})