const mongoose = require ('mongoose')

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
      },
      codeName: {
        type: String,
        trim: true,
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      },
      phoneNumber: {
        type: Number,
        required: [true, 'Phone Number is required'],
        trim: true,
      },
      gender: {
        type: String,
        required: [true, 'Gender is required'],
      },
      image: {
        type: String,
        required: [true, 'photo is required'],
      },
      stack: {
        type: String,
        required: [true, 'Stack is required'],
      },
    })
    
    const TodoUser = mongoose.model('TodoUser', todoSchema)
    
    module.exports = TodoUser


   