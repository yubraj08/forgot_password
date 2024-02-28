var express = require('express')
var dotenv = require('dotenv').config()
var mongoose = require('mongoose')
const userRoute = require('./routes/user')


const PORT = process.env.PORT
const url = process.env.DB

const app = express()
app.use(express.json())



app.use('/',userRoute)


mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.listen(PORT,()=>{
    console.log("Server started in " + PORT)
})