const express = require("express");

const {
  getWorkouts,
  createWorkout,
  deleteWorkout,
} = require("../controller/workout.controller");

const router = express.Router();

router.get("/", getWorkouts);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

module.exports = router;