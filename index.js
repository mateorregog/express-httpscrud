const express = require('express')

const app = express()

 //Get sirve para hacer routing en express
app.get('/products', (req, res)=>{
    //validar
    //query
    //process
    res.send('products');
})

app.post('/products', (req, res)=>{
    res.send('creating products');
})

app.put('/products', (req, res)=>{
    res.send('updating products');
})

app.patch('/products', (req, res)=>{
    res.send('updating a part of a product');
})

app.delete('/products', (req, res)=>{
    res.send('deleting products');
})
app.listen(3000)

console.log('escuchando en puerto 3000')