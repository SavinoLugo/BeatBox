const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('This is the albums page.')
})

module.exports = router
