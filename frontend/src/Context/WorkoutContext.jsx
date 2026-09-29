import { createContext, useEffect, useReducer } from "react";

export const WorkoutContext = createContext();

const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };

    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };

    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: [],
  });

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/workouts"
        );

        const data = await response.json();

        if (!response.ok) {
          console.log(data.error);
          return;
        }

        dispatch({
          type: "SET_WORKOUTS",
          payload: data,
        });
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};