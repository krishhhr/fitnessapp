import React, { useState } from "react";
import "./App.css";

const ExerciseForm = ({ addExercise }) => {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExercise({ exercise, duration });
    setExercise("");
    setDuration("");
  };

  return (
    <form className="form">
      <label className="form-label">Exercise Name:</label>
      <input
        className="form-input"
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <label className="form-label">Duration (in minutes):</label>
      <input
        className="form-input"
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button className="form-button" type="submit" onClick={handleSubmit}>
        Add Exercise
      </button>
    </form>
  );
};
export default ExerciseForm