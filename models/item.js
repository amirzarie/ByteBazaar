const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const itemSchema = require("./objects/itemSchema");

module.exports = mongoose.model("Item", itemSchema);
