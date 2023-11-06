const express = require("express");
const router = express.Router();
const Drones = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  const droneList = await Drones.find();
  res.render("drones/list", { droneList });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    await Drones.create(req.body);
    res.redirect("/drones");
  } catch (error) {
    next(error);
    res.redirect("/drones/create");
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  const oneDrone = await Drones.findById(req.params.id);
  res.render("drones/update-form", oneDrone);
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    await Drones.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await Drones.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
