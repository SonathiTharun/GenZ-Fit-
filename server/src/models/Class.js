const { Schema, model } = require('mongoose')

const ClassSchema = new Schema(
  {
    title: { type: String, required: true },
    type: String,
    schedule: [
      {
        day: String,
        start: String,
        end: String
      }
    ],
    instructor: String,
    capacity: Number,
    gym: { type: Schema.Types.ObjectId, ref: 'Gym' }
  },
  { timestamps: true }
)

module.exports = model('Class', ClassSchema)

