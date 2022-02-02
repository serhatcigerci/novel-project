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
  const kadri = await User.create({ name: 'kadri', age: 48 })
  const kubra = await User.create({ name: 'kubra', age: 28 })

  const serhat = await User.create({ name: 'serhat', age: 22 })
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

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

/* POST create a user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.send(createdUser)
})

module.exports = router

