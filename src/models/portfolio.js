//Importar esquema y modelo
const {Schema,model} = require('mongoose')
//Crea un nuevo esquema --portfolioSchema
const portfolioSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    },
    user:{
        type:String,
        required:true
    }
},{
    timestamps:true
})



//Exportar el modelo
module.exports = model('portfolio',portfolioSchema)