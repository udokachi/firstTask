const express = require('express')
const userRoutes = express.Router()

const {
    createUser,
    getSingleUser,
    getAllUser,
  } = require('../controller/todoController')
  userRoutes.get('/:id',  getSingleUser)
  userRoutes.post('/create', createUser)
  userRoutes.post('/', getAllUser)
  
 
module.exports = userRoutes
