const express = require('express')

const router = express.Router()
const Chapter = require('../models/chapter')

/* POST create a book */
router.post('/', async (req, res) => {
  const chapterToCreate = {
    filename: req.body.filename,
  }

  const createdChapter = await Chapter.create(chapterToCreate)
  res.send(createdChapter)
})

module.exports = router
