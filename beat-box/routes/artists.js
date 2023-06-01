const express = require('express')
const router = express.Router()
const artistsCtrl = require('../controllers/artists')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', artistsCtrl.index)
router.get('/new', ensureLoggedIn, artistsCtrl.new)
router.post('/', ensureLoggedIn, artistsCtrl.create)
router.delete('/:id', ensureLoggedIn, artistsCtrl.delete)

module.exports = router
