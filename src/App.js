import React, { useState } from "react";
import "./App.css";
import ExerciseForm from './ExerciseForm'
import ExerciseHistory from './ExerciseHistory'

const App = () => {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const removeExercise = (index) => {
    setExercises(exercises.filter((exercise, i) => i !== index));
  };

  const clearExercises = () => {
    setExercises([]);
  };

  return (
    <div className="container">
      <ExerciseForm addExercise={addExercise} />
      <ExerciseHistory
        exercises={exercises}
        removeExercise={removeExercise}
        clearExercises={clearExercises}
      />
      </div>
      );
      }

export default App;
