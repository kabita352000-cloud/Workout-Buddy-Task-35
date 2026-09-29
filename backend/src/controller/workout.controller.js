const Workout = require("../models/workout.model");

// GET all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });

    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch workouts",
    });
  }
};

// POST create workout
const createWorkout = async (req, res) => {
  try {
    const { title, load, reps } = req.body;

    if (!title || load === undefined || reps === undefined) {
      return res.status(400).json({
        error: "Title, load and reps are required",
      });
    }

    if (Number(load) < 0) {
      return res.status(400).json({
        error: "Load cannot be negative",
      });
    }

    if (Number(reps) < 1) {
      return res.status(400).json({
        error: "Reps must be at least 1",
      });
    }

    const workout = await Workout.create({
      title,
      load: Number(load),
      reps: Number(reps),
    });

    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// DELETE workout
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
      return res.status(404).json({
        error: "Workout not found",
      });
    }

    res.status(200).json({
      message: "Workout deleted successfully",
      workout,
    });
  } catch (error) {
    res.status(400).json({
      error: "Invalid workout ID",
    });
  }
};

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout,
};