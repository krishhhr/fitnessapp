import React from "react";
import "./App.css";

const ExerciseList = ({ exercises, removeExercise }) => {
    return (
      <ul className="list">
        {exercises.map((exercise, index) => (
          <li className="list-item" key={index}>
            {exercise.exercise} - {exercise.duration} minutes
            <button
              className="list-item-button"
              onClick={() => removeExercise(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  };
  export default ExerciseList