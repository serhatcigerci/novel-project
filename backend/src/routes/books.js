const express = require('express')

const router = express.Router()
const Book = require('../models/book')

router.get('/', async (req, res) => {
  const books = await Book.find({})
  res.send(books)
})

/* POST create a book */
router.post('/', async (req, res) => {
  const bookToCreate = {
    filename: req.body.filename,
  }

  const createdBook = await Book.create(bookToCreate)
  res.send(createdBook)
})

module.exports = router
