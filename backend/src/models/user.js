const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  bio: String,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      autopopulate: true,
    },
  ],
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chapter',
      autopopulate: true,
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
})
class User {
  async addBook(book) {
    this.books.push(book)
    await this.save()
  }

  async addChapter(chapter) {
    this.chapters.push(chapter)
    await this.save()
  }

  async likeBook(book) {
    this.likes.push(book)
    book.likedBy.push(this)

    await book.save()
    await this.save()
  }

  async likeChapter(chapter) {
    this.likes.push(chapter)
    chapter.likedBy.push(this)

    await chapter.save()
    await this.save()
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})
module.exports = mongoose.model('User', userSchema)
