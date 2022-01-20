const express = require('express');

const router = express.Router();

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
 const kadri = new User('kadri', 48)
 const kubra = new User('kubra', 28)
 const serhat = new User('serhat', 22)

 const berlinPhoto = new Photo('berlin.jpg')
 const munichPhoto = new Photo('munich.jpg')

 serhat.addPhoto(berlinPhoto)
 serhat.addPhoto(munichPhoto)
 serhat.bio = 'just a dude trying to learn how to code.'

 kubra.likePhoto(berlinPhoto)
 kadri.likePhoto(berlinPhoto)

 await berlinPhoto.save()
 await munichPhoto.save() 
 
 res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})
module.exports = router;
