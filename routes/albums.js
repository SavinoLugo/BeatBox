const express = require('express')
const router = express.Router()
const albumsCtrl = require('../controllers/albums')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/new', ensureLoggedIn, albumsCtrl.new)
router.post('/', ensureLoggedIn, albumsCtrl.create)
router.get('/', ensureLoggedIn, albumsCtrl.index)
router.delete('/:id', ensureLoggedIn, albumsCtrl.delete)

module.exports = router
