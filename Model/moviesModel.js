const mongoose =require('mongoose')
const moviesSchema = new mongoose.Schema({
    name: { type: String },
    releaseDate: { type: String },
    
})
const moviesModel= mongoose.model("movies",moviesSchema)
module.exports={
    moviesModel}