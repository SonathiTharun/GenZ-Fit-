const MentalResource = require('../models/MentalResource')

async function list(req, res) {
  try {
    const items = await MentalResource.find().limit(50)
    res.json(items)
  } catch (e) {
    res.status(500).json({ message: 'Failed to fetch mental resources' })
  }
}

async function create(req, res) {
  try {
    const item = await MentalResource.create(req.body)
    res.status(201).json(item)
  } catch (e) {
    res.status(400).json({ message: 'Failed to create mental resource' })
  }
}

module.exports = { list, create }

