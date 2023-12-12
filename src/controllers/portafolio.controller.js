const Portfolio = require('../models/portfolio')
//Metodo para listar los portafolios


const renderAllPortafolios = async (req,res)=>{
    //Listar todos los portafolios y transformar en objetos lean
    const portfolios = await Portfolio.find().lean()
    //Mandar a la vista los portafolios
    res.render('portafolio/allPortfolios',{portfolios})
}







//Metodo para guardar en la base de datos
// const renderAllPortafolios = (req,res)=>{
//     res.send('Listar todos los portafolios')
// }
//Metodo para guardar en la base de datos
const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}
//Metodo para mostrar el formulario 
const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
}
//Metodo para capturar en la base de datos lo capturado en el form
const createNewPortafolio =async (req,res)=>{
    //Desestructurar los datos del REQ.BODY
    const {title, category,description} = req.body
    //Crear una nueva instancia
    const newPortfolio = new Portfolio({title,category,description})
    //Guardar en la BDD
    await newPortfolio.save()
    //Mostrar el resultado
    res.json({newPortfolio})
}
//Metodo para guardar en la base de datos 
// const createNewPortafolio = (req,res)=>{
//     console.log(req.body);
//     res.send("Portafolio almacenado en la BDD")
// }
//Metodo para actualizar el formulario
const renderEditPortafolioForm = (req,res)=>{
    res.send('Formulario para editar un portafolio')
}
//Metodo para capturar la informacion y almacenar en la base de datos (Actualizar)
const updatePortafolio = (req,res)=>{
    res.send('Editar un portafolio')
}
//Metodo para eliminar en la base de datos
const deletePortafolio = (req,res)=>{
    res.send('Eliminar un nuevo portafolio')
}

//Exportación COMMONJS nombrada
module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}