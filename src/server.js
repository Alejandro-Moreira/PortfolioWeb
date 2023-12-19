//Importacion express
const express = require('express')
//Importacion path
const path = require('path')
//Importacion handlebars
const { engine }  = require('express-handlebars')
//Importacion metodo override
const methodOverride = require('method-override')
//Importacion passport
const passport = require('passport');
//Importacion sesion
const session = require('express-session');
//Importacion de fileupload
const fileUpload = require('express-fileupload')


// Inicializaciones
const app = express()
require('./config/passport')

// Variables de  Configuracion 
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))
//Configuraciones extras
//Establecer la carpeta temporal y el directorio
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

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
app.use(methodOverride('_method'))
//Configurar la sesion del usuario
app.use(session({ 
    secret: 'secret',
    resave:true,
    saveUninitialized:true
}));
//Inicializar passportjs y session
app.use(passport.initialize())
app.use(passport.session())

// Variables globales
//Crear una variable local
app.use((req,res,next)=>{
    res.locals.user = req.user?.name || null
    next()
})
// Rutas 
app.use(require('./routers/index.routes'))
app.use(require('./routers/portafolio.routes'))
app.use(require('./routers/user.routes'))
// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))


module.exports = app