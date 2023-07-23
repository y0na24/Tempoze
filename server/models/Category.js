const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    id: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

module.exports = model('Category', schema)
