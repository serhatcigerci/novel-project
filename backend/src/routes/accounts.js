const express = require('express')
const passport = require('passport')
const User = require('../models/user')

const router = express.Router()


router.get('/session', (req, res) => {
  res.send(req.session)
});

router.post('/', async (req) => {
  const {name, age, email, password} = req.body

  const user = new User({ name, age, email })
  await user.setPassword(password)
  await user.save()

  return user
})

router.post('/session',
  passport.authenticate('local', {failWithError: true}), async (req, res) => {
  res.send(req.user)
})
module.exports = router;
