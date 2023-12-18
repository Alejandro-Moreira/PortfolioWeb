//Importar router de express
const{Router} = require('express')
//Importar la ruta
const {isAuthenticated} = require('../helpers/validate-auth')
//Instanciar la variable router
const router = Router()

const { renderAllPortafolios,
        renderPortafolio,
        renderPortafolioForm,
        createNewPortafolio,
        renderEditPortafolioForm,
        updatePortafolio,
        deletePortafolio
    } = require('../controllers/portafolio.controller.js')
//Ruta para cargar la vista del formulario
router.get('/portafolio/add', isAuthenticated, renderPortafolioForm)
//Ruta para capturar los datos del form y guardar en la BDD
router.post('/portafolio/add', isAuthenticated, createNewPortafolio)
//Ruta para presentar todos los portafolios
router.get('/portafolios', isAuthenticated, renderAllPortafolios)
//Ruta para presentar el detalle de un portafolio
router.get('/portafolio/:id', isAuthenticated, renderPortafolio)
//Ruta para cargar la vista del formulario
router.get('/portafolio/edit/:id', isAuthenticated, renderEditPortafolioForm)
//Ruta para capturar los datos del form y guardar en la BDD
router.put('/portafolio/edit/:id', isAuthenticated, updatePortafolio)
//Ruta para eliminar el portafolio
router.delete('/portafolio/delete/:id', deletePortafolio)

//Exportar la variable router por default
module.exports = router