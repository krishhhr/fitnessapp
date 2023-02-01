import React from "react";
import ExerciseList from './ExerciseList'
import "./App.css";


const ExerciseHistory = ({ exercises, removeExercise, clearExercises }) => {
  return (
    <div className="history">
      <h3 className="history-title">Exercise History</h3>
      <ExerciseList exercises={exercises} removeExercise={removeExercise} />
      <button
        className="history-button"
        onClick={clearExercises}
        disabled={!exercises.length}
      >
        Clear Exercise History
      </button>
    </div>
  );
};
export default ExerciseHistory