const Portfolio = require('../models/portfolio')
//Importar el metodo uploadimage
const { uploadImage } = require('../config/cloudinary')

//Metodo para listar los portafolios
// const renderAllPortafolios = async (req,res)=>{
//     //Listar todos los portafolios y transformar en objetos lean
//     const portfolios = await Portfolio.find().lean()
//     //Mandar a la vista los portafolios
//     res.render('portafolio/allPortfolios',{portfolios})
// }

const renderAllPortafolios = async(req,res)=>{
    const portfolios = await Portfolio.find({user:req.user._id}).lean()
    res.render("portafolio/allPortfolios",{portfolios})
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
// const createNewPortafolio =async (req,res)=>{
//     const {title, category,description} = req.body
//     const newPortfolio = new Portfolio({title,category,description})
//     await newPortfolio.save()
//     res.redirect('/portafolios')
// }

const createNewPortafolio =async (req,res)=>{

    const {title, category,description} = req.body   
    const newPortfolio = new Portfolio({title,category,description})
    newPortfolio.user = req.user._id
    //VValidar si existe una imagen
    if(!(req.files?.image)) return res.send("Se requiere una imagen")
    //Utilizar el metodo
    await uploadImage(req.files.image.tempFilePath)
    await newPortfolio.save()
    res.redirect('/portafolios')
}
//Metodo para guardar en la base de datos 
// const createNewPortafolio = (req,res)=>{
//     console.log(req.body);
//     res.send("Portafolio almacenado en la BDD")
// }
//Metodo para actualizar el formulario
const renderEditPortafolioForm =async(req,res)=>{
    //Consulta del portafolio en BDD con el ID
    const portfolio = await Portfolio.findById(req.params.id).lean()
    //Mandar a la vista
    res.render('portafolio/editPortfolio',{portfolio})
}
//Metodo para capturar la informacion y almacenar en la base de datos (Actualizar)
// const updatePortafolio = async(req,res)=>{
//     //Capturar los datos del body
//     const {title,category,description}= req.body
//     //Actualizar el portafolio en BDD
//     await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
//     //Redireccionar
//     res.redirect('/portafolios')
// }
const updatePortafolio = async(req,res)=>{
    const portfolio = await Portfolio.findById(req.params.id).lean()
    if(!(portfolio.user.toString() !== req.user._id.toString())) return res.redirect('/portafolios')
    const {title,category,description}= req.body
    await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    res.redirect('/portafolios')
}
//Metodo para eliminar en la base de datos
const deletePortafolio = async(req,res)=>{
    await Portfolio.findByIdAndDelete(req.params.id)
    res.redirect('/portafolios')
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