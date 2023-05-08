const { Schema } = require("mongoose");

const itemSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    path: {
      type: String,
      require: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    position: {
      type: [Number],
      required: true,
      unique: true,
    },
    scale: {
      type: [Number],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
