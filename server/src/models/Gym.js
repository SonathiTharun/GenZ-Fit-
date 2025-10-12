const { Schema, model } = require('mongoose')

const GymSchema = new Schema(
  {
    name: { type: String, required: true },
    city: String,
    address: String,
    facilities: [{ type: String }],
    images: [{ type: String }],
    location: { lat: Number, lng: Number }
  },
  { timestamps: true }
)

module.exports = model('Gym', GymSchema)

