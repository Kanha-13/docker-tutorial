const express = require("express")
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 8001;

mongoose.connect("mongodb://Kanha:pass@mongo:27017/?authSource=admin").then(() => console.log("connected to db")).catch((err) => console.log(err))


app.get('/', (req, res) => res.send('<h2>Hello there, I am nodemon</h2>'))

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));