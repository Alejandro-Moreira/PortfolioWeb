//Importar router de express
const{Router} = require('express')
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
router.get('/portafolio/add', renderPortafolioForm)
//Ruta para capturar los datos del form y guardar en la BDD
router.post('/portafolio/add', createNewPortafolio)
//Ruta para presentar todos los portafolios
router.get('/portafolios', renderAllPortafolios)
//Ruta para presentar el detalle de un portafolio
router.get('/portafolio/:id', renderPortafolio)
//Ruta para cargar la vista del formulario
router.get('/portafolio/edit/:id', renderEditPortafolioForm)
//Ruta para capturar los datos del form y guardar en la BDD
router.put('/portafolio/edit/:id', updatePortafolio)
//Ruta para eliminar el portafolio
router.delete('/portafolio/delete/:id', deletePortafolio)

//Exportar la vvariable router por default
module.exports = router