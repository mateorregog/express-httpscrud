//Usar en la respuesta datos pasados en la URL

const express = require("express");

const app = express();

app.get("/hello/:user", (req, res) => {
  //Se pasa como parámetro.
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

app.listen(3000);

console.log("escuchando en puerto 3000");
