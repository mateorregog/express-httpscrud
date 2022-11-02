//Diferentes maneras en que el cliente puede enviarle datos al servidor

const express = require('express')

const app = express()

app.use(express.text())  //Se debe usar para que express pueda visualizar el contenido txt o json, o el que sea. 
app.use(express.json())
app.use(express.urlencoded({extended:false})) // Se usa para leer formularios. Extended false indica que sólo será texto



app.post('/user',(req, res)=>{
    console.log(req.body)
    res.send('Nuevo usuario creado')
})

app.listen(3000)

console.log('escuchando en puerto 3000')