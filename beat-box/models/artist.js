const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  yearFormed: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Artist', artistSchema)
