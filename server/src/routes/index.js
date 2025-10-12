const express = require('express')
const gyms = require('./gyms.routes')
const classes = require('./classes.routes')
const dietplans = require('./dietplans.routes')
const mental = require('./mental.routes')

const router = express.Router()

router.use('/gyms', gyms)
router.use('/classes', classes)
router.use('/diet-plans', dietplans)
router.use('/mental', mental)

module.exports = router

