const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    userId: { type: String, required: true },
    projectId: { type: String, required: true },
    categories: [{ type: Object, ref: 'Category' }],
  },
  {
    timestamps: true,
  }
)

module.exports = model('Project', schema)
