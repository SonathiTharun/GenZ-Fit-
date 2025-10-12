const { Schema, model } = require('mongoose')

const MentalResourceSchema = new Schema(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ['meditation', 'article', 'audio', 'video'], default: 'meditation' },
    contentUrl: String,
    description: String,
    durationMins: Number
  },
  { timestamps: true }
)

module.exports = model('MentalResource', MentalResourceSchema)

