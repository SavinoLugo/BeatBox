const Album = require('../models/album')

module.exports = {
  index,
  new: newAlbum,
  show,
  create,
  delete: deleteAlbum
}

function deleteAlbum(req, res, next) {
  Album.findByIdAndRemove(req.params.id)
    .then(function (album) {
      if (!album) {
        return res.redirect('/albums')
      }
      res.redirect('/albums')
    })
    .catch(function (err) {
      return next(err)
    })
}

async function index(req, res) {
  res.render('albums/index', {
    albums: await Album.find()
  })
}

//
async function show(req, res) {
  const album = await Album.findById(req.params.id)
  res.render('albums/show', {
    title: 'Album List',
    album
  })
}

function newAlbum(req, res) {
  res.render('albums/new', { title: 'Add Album', errorMsg: '' })
}

//For Submit Button CREATE
async function create(req, res) {
  try {
    await Album.create(req.body)
    res.redirect('/albums')
  } catch (err) {
    console.log(err)
    res.render('albums/new', { errorMsg: err.message })
  }
}
