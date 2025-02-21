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
    ).then(() => console.log("Connected to MongoDB Atlas")).catch((error) => console.log(error));

app.use(foodRouter);
app.listen(3000, () => {
console.log("Server is running...");
});