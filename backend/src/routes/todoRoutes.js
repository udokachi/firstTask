const express = require('express')
const router = express.Router()

const {
    createUser,
    getTodoUser,
    allTodoUser,
  } = require('../controller/todoController')
  router.post('/create', createUser)
  router.post('/users', getTodoUser)
  router.get('/users/:id', allTodoUser)
 
module.exports = router
