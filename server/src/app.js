const express = require('express')
const cors = require('cors')
const api = require('./routes')

const app = express()
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))
app.use(express.json())

app.use('/api', api)
app.get('/health', (_, res) => res.json({ status: 'ok', name: 'GenZ.Fit API' }))

module.exports = app

