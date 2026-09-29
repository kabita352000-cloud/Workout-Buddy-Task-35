# Workout Buddy - Backend

This is the backend part of **Task 35 - Workout Buddy**.

It is built using **Node.js, Express.js, MongoDB and Mongoose**.

The backend provides APIs to:

* Get all workouts
* Create a new workout
* Delete a workout
* Validate workout data
* Connect with MongoDB Atlas

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* MongoDB Atlas
* Mongoose
* CORS
* dotenv
* Nodemon

---

## Project Structure

```text
backend/
│
├── src/
│   ├── controllers/
│   │   └── workoutController.js
│   │
│   ├── models/
│   │   └── workoutModel.js
│   │
│   └── routes/
│       └── workoutRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## Database

The application uses **MongoDB Atlas**.

Database connection is stored in the `.env` file.

Example:

```env
PORT=8000
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/workoutBuddy
```

Do not upload the `.env` file to GitHub because it contains database credentials.

---

## Workout Model

The workout collection has the following fields:

```text
title
load
reps
createdAt
updatedAt
```

### Title

```text
Required
String
```

Example:

```text
Chest
```

### Load

```text
Required
Number
```

Example:

```text
50
```

### Reps

```text
Required
Number
```

Example:

```text
10
```

### Timestamps

Mongoose automatically creates:

```text
createdAt
updatedAt
```

---

## REST APIs

Base URL:

```text
http://localhost:8000/api/workouts
```

---

### 1. Get All Workouts

```text
GET /api/workouts
```

This API gets all workouts.

The latest workouts are displayed first.

Example response:

```json
[
  {
    "_id": "123456",
    "title": "Chest",
    "load": 50,
    "reps": 10,
    "createdAt": "2026-09-23T10:30:00.000Z",
    "updatedAt": "2026-09-23T10:30:00.000Z"
  }
]
```

---

### 2. Create Workout

```text
POST /api/workouts
```

Request body:

```json
{
  "title": "Chest",
  "load": 50,
  "reps": 10
}
```

Successful response:

```json
{
  "_id": "123456",
  "title": "Chest",
  "load": 50,
  "reps": 10
}
```

---

### 3. Delete Workout

```text
DELETE /api/workouts/:id
```

Example:

```text
DELETE /api/workouts/123456
```

Successful response:

```json
{
  "message": "Workout deleted successfully"
}
```

---

## Error Handling

The backend validates workout data.

### Missing fields

If title, load or reps is missing:

```json
{
  "error": "Title, load and reps are required"
}
```

Status:

```text
400 Bad Request
```

---

### Invalid Load

Load cannot be negative.

Example:

```json
{
  "title": "Chest",
  "load": -10,
  "reps": 10
}
```

Response:

```json
{
  "error": "Load cannot be negative"
}
```

---

### Invalid Reps

Reps must be at least 1.

Example:

```json
{
  "title": "Chest",
  "load": 50,
  "reps": 0
}
```

Response:

```json
{
  "error": "Reps must be at least 1"
}
```

---

### Workout Not Found

If the workout ID does not exist:

```json
{
  "error": "Workout not found"
}
```

Status:

```text
404 Not Found
```

---

## Controller

The controller file is:

```text
src/controllers/workoutController.js
```

It contains three main functions:

```text
getWorkouts()
createWorkout()
deleteWorkout()
```

---

## Routes

The route file is:

```text
src/routes/workoutRoutes.js
```

Routes:

```js
router.get("/", getWorkouts);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);
```

These routes are connected in `server.js`:

```js
app.use("/api/workouts", workoutRoutes);
```

---

## How to Install

Go to the backend folder:

```bash
cd /home/kabita-kumari/HTML/Task35/backend
```

Install dependencies:

```bash
npm install
```

---

## How to Run

Start the backend using:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:8000
```

You should see:

```text
Connected to MongoDB
Server running on port 8000
```

---

## Test API

You can test the APIs using:

* Postman
* Thunder Client
* Browser for GET API

### GET

Open:

```text
http://localhost:8000/api/workouts
```

### POST

Use Postman or Thunder Client:

```text
POST http://localhost:8000/api/workouts
```

Body:

```json
{
  "title": "Hamstrings",
  "load": 40,
  "reps": 12
}
```

### DELETE

```text
DELETE http://localhost:8000/api/workouts/WORKOUT_ID
```

---

## Frontend Connection

The React frontend runs separately.

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:8000
```

The frontend communicates with the backend using:

```text
http://localhost:8000/api/workouts
```

---

## Task Requirements Completed

* [x] Node.js backend
* [x] Express.js
* [x] MongoDB Atlas
* [x] Mongoose
* [x] Workout model
* [x] GET workout API
* [x] POST workout API
* [x] DELETE workout API
* [x] Controllers
* [x] Routes
* [x] Validation
* [x] Error handling
* [x] Timestamps
* [x] Latest workouts first
* [x] CORS
* [x] Environment variables

---

## Author

Kabita Kumari
