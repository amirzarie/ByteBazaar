const { Schema } = require("mongoose");

const itemSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
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
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
