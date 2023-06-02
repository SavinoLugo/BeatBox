const Artist = require('../models/artist')

module.exports = {
  index,
  show,
  new: newArtist,
  create,
  delete: deleteArtist
}

function deleteArtist(req, res, next) {
  Artist.findByIdAndRemove(req.params.id)
    .then(function (artist) {
      if (!artist) {
        return res.redirect('/artists')
      }
      res.redirect('/artists')
    })
    .catch(function (err) {
      return next(err)
    })
}

async function index(req, res) {
  res.render('artists/index', {
    artists: await Artist.find()
  })
}

//
async function show(req, res) {
  const artist = await Artist.findById(req.params.id)
  res.render('artists/show', {
    title: 'Artist List',
    artist
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
