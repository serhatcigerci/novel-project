const Person = require('./person')
const Photo = require('./photo')
const kadri = new Person('kadri', 48)
const kubra = new Person('kubra', 28)
const serhat = new Person('serhat', 22)
const berlinPhoto = new Photo('berlin.jpg')
const munichPhoto = new Photo('munich.jpg')

serhat.addPhoto(berlinPhoto)
serhat.addPhoto(munichPhoto)
serhat.bio = 'just a dude trying to learn how to code.'

kubra.likePhoto(berlinPhoto)
kadri.likePhoto(berlinPhoto)

console.log(
  kadri.likes[0].likedBy[0].likes[0].filename == kadri.likes[0].filename,
  (kadri.likes[0].filename = serhat.photos[0].filename)
)

console.log(serhat.profile)
