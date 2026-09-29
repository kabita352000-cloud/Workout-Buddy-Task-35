import { useContext } from "react";
import { WorkoutContext } from "../Context/WorkoutContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useContext(WorkoutContext);

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:8000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "DELETE_WORKOUT",
        payload: workout._id,
      });
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="workout-card">
      <div className="workout-content">
        <h3>{workout.title}</h3>

        <p>
          <strong>Load:</strong> {workout.load} kg
        </p>

        <p>
          <strong>Reps:</strong> {workout.reps}
        </p>

        <p className="created-time">
          {new Date(workout.createdAt).toLocaleString()}
        </p>
      </div>

      <button className="delete-btn" onClick={handleDelete}>
        🗑️
      </button>
    </div>
  );
};

export default WorkoutDetails;