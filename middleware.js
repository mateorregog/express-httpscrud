//Middleware son funciones que se ejecutan antes de llega r acualquier ruta o petición
//Todas las rutas después d elos middleware están protegidas por dicha lógica. 
const express = require('express')

const app = express();
 //Las rutas que quedan antes del middleware no quedan protegidas por este

 app.use((req,res,next)=>{       //Se crea una función para hacer una operación antes de que llegue al get. El parámetro next se usa para que continue con el flujo normal. Pasa por esta función antes de pasar a cualquier otra ruta.
    console.log('pasó por aquí')
    console.log(`Ruta: ${req.url} Método: ${req.method}` )
    next()
})

app.get('/profile', (req,res)=> {
    res.send('profile page')
})

app.get('/about', (req,res)=> {
    res.send('about page')
})

app.use((req,res,next)=>{          //Función de autorización. Si el query enviado cumple con las condiciones, pasa el middleware, de lo contrario no pasa el next. 
    if(req.query.login==='matt@gmail.com'){
        next()
    }else{
        res.send('No authorized')
    }
})
app.get('/dashboard',(req,res)=>{
    res.send('dashboard page')
})

app.listen(3000)

console.log(`Server on port ${3000}`)