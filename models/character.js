const mongoose = require('mongoose') 
const Schema = mongoose.Schema 
const characterSchema = new Schema({ 
//  name: String,
 name: {type: String, unique: true}, 
 ultimate: String 
}) 
module.exports = mongoose.model('Character', characterSchema) 
