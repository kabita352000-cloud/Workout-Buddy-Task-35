const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const workoutRoutes = require("./src/routes/workout.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.send("Workout Buddy API is running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });