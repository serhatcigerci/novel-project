// eslint-disable-next-line import/no-unresolved
const express = require('express');

const router = express.Router();

const User = require('../models/user')
const Photo = require('../models/photo')

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


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
