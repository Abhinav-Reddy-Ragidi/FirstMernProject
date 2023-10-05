const express = require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors');
const url = 'mongodb+srv://ragidiabhinavreddy:abhi@cluster0.rqkytb0.mongodb.net/newdb?retryWrites=true&w=majority&appName=AtlasApp'
const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () =>
{
console.log('connected...')
})
app.use(cors());
app.use(express.json())


const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)
app.listen(9000, () =>
{
console.log('Server started')
})