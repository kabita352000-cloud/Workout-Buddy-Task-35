import { useContext, useState } from "react";
import { WorkoutContext } from "../Context/WorkoutContext";

const WorkoutForm = () => {
  const { dispatch } = useContext(WorkoutContext);

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!title || !load || !reps) {
      setError("Please fill all fields");
      return;
    }

    const workout = {
      title,
      load: Number(load),
      reps: Number(reps),
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/workouts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workout),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        return;
      }

      dispatch({
        type: "CREATE_WORKOUT",
        payload: data,
      });

      setTitle("");
      setLoad("");
      setReps("");
    } catch (error) {
      setError("Unable to connect to server");
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Workout</h2>

      <form onSubmit={handleSubmit}>
        <label>Workout Title</label>

        <input
          type="text"
          placeholder="Enter workout title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Load (kg)</label>

        <input
          type="number"
          placeholder="Enter load"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />

        <label>Reps</label>

        <input
          type="number"
          placeholder="Enter reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />

        {error && <p className="form-error">{error}</p>}

        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
};

export default WorkoutForm;