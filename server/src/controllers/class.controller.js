const ClassModel = require('../models/Class')

async function list(req, res) {
  try {
    const items = await ClassModel.find().limit(50)
    res.json(items)
  } catch (e) {
    res.status(500).json({ message: 'Failed to fetch classes' })
  }
}

async function create(req, res) {
  try {
    const item = await ClassModel.create(req.body)
    res.status(201).json(item)
  } catch (e) {
    res.status(400).json({ message: 'Failed to create class' })
  }
}

module.exports = { list, create }

