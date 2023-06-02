const User = require('../models/user')

// Example controller actions for user-related operations

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error })
  }
}

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error })
  }
}

// Other controller actions for updating, deleting, etc.

module.exports = {
  getUsers,
  createUser
  // Other exported controller actions for user operations
}
