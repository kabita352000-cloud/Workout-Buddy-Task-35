# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Workout Buddy - Frontend

This is the frontend part of **Task 35 - Workout Buddy**.

Full-stack Workout Buddy application built with React.js, Context API, Node.js, Express.js, and MongoDB for managing workout records.

The application allows users to:

* View workouts
* Add a new workout
* Delete a workout
* Store workout data using Context API
* Manage state using `useReducer`
* Show error messages
* Use a responsive design

---

## Technologies Used

* React.js
* JavaScript
* Context API
* useReducer
* CSS
* Fetch API
* Vite

---

## Project Structure

```text
src/
│
├── Components/
│   ├── WorkoutDetails.jsx
│   └── WorkoutForm.jsx
│
├── Context/
│   └── WorkoutContext.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Features

### 1. Show Workouts

The frontend gets workout data from the backend API and displays it as cards.

Each card shows:

* Workout title
* Load in kg
* Reps
* Created time
* Delete button

---

### 2. Add Workout

The form contains three fields:

```text
Workout Title
Load
Reps
```

Example:

```text
Workout Title: Chest
Load: 50
Reps: 10
```

After submitting the form, the workout is saved in the database and displayed on the page.

---

### 3. Delete Workout

Each workout has a delete button:

```text
🗑️
```

Clicking the button deletes the workout from the database and removes it from the UI.

---

## Context API

The application uses **React Context API** for global workout state.

File:

```text
Context/WorkoutContext.jsx
```

The context stores:

```js
workouts
dispatch
```

---

## useReducer

`useReducer` is used to manage workout state.

The application has three actions:

```text
SET_WORKOUTS
CREATE_WORKOUT
DELETE_WORKOUT
```

### SET_WORKOUTS

Used when workouts are fetched from the backend.

```js
dispatch({
  type: "SET_WORKOUTS",
  payload: data
});
```

### CREATE_WORKOUT

Used after successfully adding a workout.

```js
dispatch({
  type: "CREATE_WORKOUT",
  payload: data
});
```

### DELETE_WORKOUT

Used after successfully deleting a workout.

```js
dispatch({
  type: "DELETE_WORKOUT",
  payload: workout._id
});
```

---

## Backend Connection

The frontend connects to the backend running on:

```text
http://localhost:8000
```

Workout API:

```text
http://localhost:8000/api/workouts
```

### APIs Used

#### Get Workouts

```text
GET /api/workouts
```

#### Add Workout

```text
POST /api/workouts
```

#### Delete Workout

```text
DELETE /api/workouts/:id
```

---

## Error Handling

The frontend displays an error message if:

* A field is empty
* The backend returns a validation error
* The backend is not running
* The frontend cannot connect to the backend

Example:

```text
Please fill all fields
```

or:

```text
Unable to connect to server
```

---

## Responsive Design

The application works on:

* Desktop
* Tablet
* Mobile

On desktop:

```text
Workout List     Add Workout Form
```

On mobile:

```text
Workout List

Add Workout Form
```

The layout does not create horizontal scrolling on mobile.

---

## How to Run

### Step 1: Open frontend folder

```bash
cd /home/kabita-kumari/HTML/Task35/frontend
```

### Step 2: Install packages

```bash
npm install
```

### Step 3: Start frontend

```bash
npm run dev
```

The frontend will run on a URL similar to:

```text
http://localhost:5173
```

---

## Important

Before running the frontend, make sure the backend is also running.

Open another terminal and start the backend:

```bash
cd /home/kabita-kumari/HTML/Task35/backend
npm run dev
```

Backend should show:

```text
Connected to MongoDB
Server running on port 8000
```

Then start the frontend:

```bash
cd /home/kabita-kumari/HTML/Task35/frontend
npm run dev
```

---

## Example Workout

```text
Workout Budyyy

Chest
Load: 50 kg
Reps: 10
Created: 9/23/2026, 6:30 PM
🗑️
```

---

## Task Requirements Completed

* [x] React frontend
* [x] Workout list
* [x] Add workout form
* [x] Delete workout
* [x] Context API
* [x] useReducer
* [x] Backend API connection
* [x] Error handling
* [x] Responsive layout
* [x] MongoDB data displayed through backend

---

## Author

Kabita Kumari

