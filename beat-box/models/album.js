const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  }
})

const Album = mongoose.model('Album', albumSchema)
