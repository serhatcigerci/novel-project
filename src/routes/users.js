const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Photo = require('../models/photo')

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

  const berlinPhoto = await Photo.create({ filename: 'berlin.jpg' })
  const munichPhoto = await Photo.create({ filename: 'munich.jpg' })

  await serhat.addPhoto(berlinPhoto)
  await serhat.addPhoto(munichPhoto)

  await kubra.likePhoto(berlinPhoto)
  await kadri.likePhoto(berlinPhoto)

  await berlinPhoto.save()
  await munichPhoto.save()

  console.log(serhat)
  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})
module.exports = router
