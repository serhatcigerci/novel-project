const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
  filename: String,
  likedBy: []
})

module.exports = mongoose.model('Photo', photoSchema)
class Photo {
  constructor(filename) {
    this.filename = filename
    this.likedBy = []
  }
}

module.exports = Photo
