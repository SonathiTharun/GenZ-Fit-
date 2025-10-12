const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, 'config', '.env') })
const { connectDB } = require('./config/db')
const app = require('./app')

const PORT = process.env.PORT || 5000

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`API listening on port http://localhost:${PORT}`))
  })
  .catch((err) => {
    console.error('Failed to start server:', err)
    process.exit(1)
  })

