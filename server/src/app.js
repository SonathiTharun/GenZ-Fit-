const express = require('express')
const cors = require('cors')
const api = require('./routes')

const app = express()
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))
app.use(express.json())

app.use('/api', api)
app.get('/health', (_, res) => res.json({ status: 'ok', name: 'GenZ.Fit API' }))
app.post('/api/diet-plans', (req, res) => {
  const userData = req.body;
  console.log('Received diet plan data:', userData);
  // You can save to DB here or process it
  res.status(200).json({ message: 'Diet plan saved successfully' });
});

module.exports = app

