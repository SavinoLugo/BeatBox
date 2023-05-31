const Artist = require('../models/artist')

module.exports = {
  index,
  new: newArtist,
  create,
  index
}

//
async function index(req, res) {
  res.render('artists/index', {
    artists: await Artist.find()
  })
}

function newArtist(req, res) {
  res.render('artists/new', { title: 'Add Artist', errorMsg: '' })
}

//For Submit Button CREATE
async function create(req, res) {
  try {
    await Artist.create(req.body)
    res.redirect('/artists')
  } catch (err) {
    console.log(err)
    res.render('artists', { errorMsg: err.message })
  }
}
