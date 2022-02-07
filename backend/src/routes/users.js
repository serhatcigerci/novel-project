const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Book = require('../models/book')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.age) {
    query.age = req.query.age
  }

  res.send(await User.find(query))
})

router.get('/initialize', async (req, res) => {
  const kadri = new User({ name: 'kadri', age: 48, email: "kadri@email.com"})
  await kadri.setPassword('test')
  await kadri.save()

  const kubra = new User({ name: 'kubra', age: 28, email: "kubra@email.com"})
  await kubra.setPassword('test')
  await kubra.save()

  const serhat = new User({ name: 'serhat', age: 22, email: "serhat@email.com"})
  await serhat.setPassword('test')
  await serhat.save()
  serhat.bio = 'just a dude trying to learn how to code.'

  const Book1 = await Book.create({ filename: 'berlin.jpg' })
  const Book2 = await Book.create({ filename: 'munich.jpg' })

  await serhat.addBook(Book1)
  await serhat.addBook(Book2)

  await kubra.likeBook(Book1)
  await kadri.likeBook(Book1)

  await Book1.save()
  await Book2.save()

  res.sendStatus(200)
})

router.post('/:userId/adds', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const book = await Book.findById(req.body.bookId)

  await user.addBook(book)
  res.sendStatus(200)
})

router.post('/:userId/likes', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const book = await Book.findById(req.body.bookId)

  await user.likeBook(book)
  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.send(user)
  else res.sendStatus(404)
})

router.get('/:userId/json', async (req, res) => {
  const user = await User.findById(req.params.userId)
  res.send(user)
})

module.exports = router
