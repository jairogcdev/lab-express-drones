// Iteration #1
const mongoose = require("mongoose");
const Drones = require("../models/Drone.model");
const allDrones = require("../seeds/drones");
const connection = async (next) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/lab-express-drones");
    console.log("Estas conectado a la BD");
    await Drones.create(allDrones);
    console.log("Creados : " + allDrones.length + " dron/es");
    console.log("Todos los drones han sido creados");
    await mongoose.disconnect();
    console.log("Conexión a BD cerrada");
  } catch (error) {
    next(error);
  }
};

connection();
