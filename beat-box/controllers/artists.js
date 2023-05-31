const Artist = require('../models/artist')

module.exports = {
  index,
  new: newArtist
}
function index(req, res) {
  res.render('artists/index', {
    artists: Artist.find()
  })
}

function newArtist(req, res) {
  res.render('artists/new', { title: 'Add Artist', errorMsg: '' })
}
