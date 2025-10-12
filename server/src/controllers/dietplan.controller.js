const DietPlan = require('../models/DietPlan')

async function list(req, res) {
  try {
    const items = await DietPlan.find().limit(50)
    res.json(items)
  } catch (e) {
    res.status(500).json({ message: 'Failed to fetch diet plans' })
  }
}

async function create(req, res) {
  try {
    const item = await DietPlan.create(req.body)
    res.status(201).json(item)
  } catch (e) {
    res.status(400).json({ message: 'Failed to create diet plan' })
  }
}

module.exports = { list, create }

