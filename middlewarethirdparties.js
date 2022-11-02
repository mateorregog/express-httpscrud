//Middleware morgan

const express = require('express')
const morgan = require('morgan')  //Se importa el paquete

const app = express();
 //Las rutas que quedan antes del middleware no quedan protegidas por este

app.use(morgan('dev'))   //Se usa invocando la función directamente, sin encesidad de crear por nosotros mismos la lógica. Los parámetros de la función se ocnsultan en la domcumentación. 

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