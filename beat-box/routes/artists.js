const express = require('express')
const router = express.Router()

// Creating a controller module
const artistsCtrl = require('../controllers/artists')
router.get('/', artistsCtrl.index)
router.get('/new', artistsCtrl.new)

//POST
router.post('/', artistsCtrl.create)

//Get rout for /artists IDX
router.get('/', artistsCtrl.index)

module.exports = router
