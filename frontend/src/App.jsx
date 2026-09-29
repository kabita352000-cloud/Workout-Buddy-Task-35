import { useContext } from "react";
import WorkoutDetails from "./Components/WorkoutDeatils";
import WorkoutForm from "./Components/WorkoutForm";
import { WorkoutContext } from "./Context/WorkoutContext";
import "./Components/App.css";

function App() {
  const { workouts } = useContext(WorkoutContext);

  return (
    <div className="app">
      <h1>Workout Budyyy</h1>

      <div className="main-container">
        <div className="workout-list">
          <h2>Workouts</h2>

          {workouts.length === 0 ? (
            <p>No workouts found. Add your first workout.</p>
          ) : (
            workouts.map((workout) => (
              <WorkoutDetails
                key={workout._id}
                workout={workout}
              />
            ))
          )}
        </div>

        <WorkoutForm />
      </div>
    </div>
  );
}

export default App;