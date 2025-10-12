const router = require('express').Router()
const ctrl = require('../controllers/class.controller')

router.get('/', ctrl.list)
router.post('/', ctrl.create)

module.exports = router

