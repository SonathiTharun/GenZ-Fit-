const { Schema, model } = require('mongoose')

const DietPlanSchema = new Schema(
  {
    name: { type: String, required: true },
    calories: Number,
    goal: { type: String, enum: ['weight_loss', 'maintenance', 'muscle_gain'], default: 'maintenance' },
    meals: [
      {
        name: String,
        time: String,
        items: [String]
      }
    ]
  },
  { timestamps: true }
)

module.exports = model('DietPlan', DietPlanSchema)

