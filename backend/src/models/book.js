const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  filename: String,
  likedBy: []
})

module.exports = mongoose.model('Book', bookSchema)