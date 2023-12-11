const express = require('express')
const path = require('path')
const { engine }  = require('express-handlebars')

// Inicializaciones
const app = express()

// Variables de  Configuracion 
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))
//Configuraciones extras
app.engine('.hbs',engine({
    //Establecer el master page
    defaultLayout:'main',
    //Establecer el path de la carpeta layouts
    layoutsDir: path.join(app.get('views'),'layouts'),
    
    partialsDir: path.join(app.get('views'),'partials'),
    
    extname:'.hbs'
}))
app.set('view engine','.hbs')
// Middlewares 
app.use(express.urlencoded({extended:false}))


// Variables globales
// Rutas 
app.use(require('./routers/index.routes'))
// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))


module.exports = app