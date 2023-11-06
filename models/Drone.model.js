// Iteration #1
const { Schema, model } = require("mongoose");

const dronesSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

const Drones = model("Drones", dronesSchema);

module.exports = Drones;
