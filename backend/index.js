const express = require ( 'express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require ( 'mongoose')
const dotenv = require ( 'dotenv')
dotenv.config()

const todoRouter= require ('./src/routes/todoRoutes')


const app = express()
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(morgan('dev'))

// const mongoose = require('mongoose')
// mongoose.connect ('mongodb://localhost:27017', (err)=>{
//     if(!err) console.log ('db connected');
//     else console.log('db error')
// })
const Port = process.env.PORT || 4000
const DB = process.env.DATABASE_URL

// console.log(DB)

mongoose
  .connect(DB)
  .then((con) => console.log('Database successfully connected'))
  .catch((err) => {
    console.log(err)
  })

  
  app.use('/users', todoRouter)
  
  app.get('/', (req, res) => {
    res.render('index')
  })


app.listen(Port,()=>{
    console.log(`Server running at http://localhost:${Port}`)
})