// artistController.js

const Artist = require('../models/artist')

// Display featured artists
const getFeaturedArtists = async (req, res) => {
  try {
    // Retrieve featured artists from the database
    const featuredArtists = await Artist.find({ featured: true })

    // Render the artists view with the featuredArtists data
    res.render('artists', { artists: featuredArtists })
  } catch (error) {
    // Handle any errors that occur during the process
    res
      .status(500)
      .json({ message: 'Error retrieving featured artists', error })
  }
}

module.exports = {
  getFeaturedArtists
}
