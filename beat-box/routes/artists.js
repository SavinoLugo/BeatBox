const express = require('express')
const router = express.Router()

// Creating a controller module
const artistsCtrl = require('../controllers/artists')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', artistsCtrl.index)
router.get('/new', ensureLoggedIn, artistsCtrl.new)
router.get('/new', artistsCtrl.new)

//POST
router.post('/', artistsCtrl.create)

router.post('/', ensureLoggedIn, artistsCtrl.create)

module.exports = router
