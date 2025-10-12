const Gym = require('../models/Gym')

async function list(req, res) {
  try {
    const items = await Gym.find().limit(50)
    res.json(items)
  } catch (e) {
    res.status(500).json({ message: 'Failed to fetch gyms' })
  }
}

async function create(req, res) {
  try {
    const item = await Gym.create(req.body)
    res.status(201).json(item)
  } catch (e) {
    res.status(400).json({ message: 'Failed to create gym' })
  }
}

module.exports = { list, create }

