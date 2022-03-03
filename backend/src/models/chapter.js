const mongoose = require('mongoose')

const chapterSchema = new mongoose.Schema({
  filename: String,
  likedBy: [],
})

module.exports = mongoose.model('Chapter', chapterSchema)
