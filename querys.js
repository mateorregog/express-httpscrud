//Manejador de querys. Se pasa la query en el enlace con un ? y se concatenan querys con &

const express = require("express");

const app = express();

app.get('/search',(req, res)=>{
    if(req.query.q ==='javascript books' ){  //Se lee la query y se validan algunas condiciones
        res.send('lista de libros de javascript')
    }else{
        res.send('página normal')
    }
})


app.get("/hello/:user", (req, res) => {
  //Se pasa como parámetro.
  console.log(req.query.user) //Se usa req.query para obtener la query pasada por el enlace
  console.log(req.query.age)
  res.send(`Hello ${req.params.user}`); //Extraer un dato de una url
});

app.get("/add/:x/:y", (req, res) => {
  //Los datos recibidos son string. Se paresean a int para operarlos como número
  const { x, y } = req.params;
  // const result = parseInt(req.params.x)+parseInt(req.params.y) Versión larga
  const result = parseInt(x) + parseInt(y); //Version corta
  res.send(`Result : ${result}`);
});

app.get('/users/:username/photo',(req, res)=>{
    if(req.params.username==='matt'){  //Validacion de usuario
         return res.sendFile('./descarga.jpg',{  //Si la condicional es true acabar la ejecución de la función
            root:__dirname
        })
    }
    res.send('El usuario no tiene acceso')
})


app.get('/nombre/:nombre/age/:age',(req, res)=>{
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`)
})


app.all('/info', (req,res)=>{   //Con el all la respuesta sirve para cualquier método get, post,pull, etc. Se crean múltiples rutas en una sola
    res.send('server info')
})

app.listen(3000);

console.log("escuchando en puerto 3000");