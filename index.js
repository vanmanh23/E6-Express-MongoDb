require('dotenv').config()
const foodRouter = require("./routes/foodRoutes.js");
const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
    mongoose.connect(
        process.env.MONGODB_API,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
    ).then(() => console.log('Database connected:', process.env.MONGODB_API)).catch((error) => console.log(error));
    // 
//    const Character = require('./models/character') 
// const ryu = new Character ({ 
//  name: 'Ryu', 
//  ultimate: 'Shinku Hadoken' 
// }) 
// ryu.save(function (error, document) { 
//  if (error) console.error(error) 
//  console.log(document) 
// }) 

const Character = require('./models/character.js') 
async function runCode() {
    try {
      await Character.deleteMany({});
      const ryu = new Character({
        name: 'Ryu',
        ultimate: 'Shinku Hadoken'
      });
  
      const doc = await ryu.save();
      console.log('Saved:', doc);
    } catch (error) {
      if (error.code === 11000) {
        console.error('Duplicate key error');
      } else {
        console.error('Error:', error);
      }
    } 
  } 
  runCode();
    // 
       
app.use(foodRouter);
app.listen(3000, () => {
console.log("Server is running...");
});