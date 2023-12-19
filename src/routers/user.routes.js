//Importar router Express
const {Router} = require('express')
const { renderRegisterForm, registerNewUser, renderLoginForm, loginUser, logoutUser } = require('../controllers/user.controller')
const { redirectIfAuthenticated } = require('../helpers/validate-auth')
//Instanciar la varibale router
const router = Router()

//Ruta para mostrar el formulario del registro
router.get('/user/register',renderRegisterForm)
//Ruta para capturar los datos del formulario y almacenar en BDD
router.post('/user/register',registerNewUser)
//Ruta para mostrar el formulario del login
// router.get('/user/login',redirectIfAuthenticated,renderLoginForm)
// Ruta para mostrar el fomrulario de login
router.get('/user/login', redirectIfAuthenticated, renderLoginForm)
//Ruta para capturar los datos del formulario y realizar el proceso de login en conjunto con la BDD
router.post('/user/login',loginUser)
//Cerrar sesion del usuario
router.post('/user/logout',logoutUser)

//Exportar la variable router
module.exports =router