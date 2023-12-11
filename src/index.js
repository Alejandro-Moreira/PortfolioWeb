//Cargar todas las variables de entorno
require('dotenv').config()
//Importar la variable app
const app = require('./server.js')
const connection = require('./database.js')
//Ejecutar el metodo connection
connection()
app.listen(3000,()=>{
    console.log(`Server on port ${3000}`);
})