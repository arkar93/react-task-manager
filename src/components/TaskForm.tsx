import React, { useState } from "react";
import { Task } from "../interfaces/types";

interface TaskFormProps {
  addTask: (task: Omit<Task, "id">) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    addTask({ name: taskName, description: taskDescription });
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 border p-3">
      <div className="form-group mb-3">
        <label>Task Name</label>
        <input
          type="text"
          className="form-control"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label>Task Description</label>
        <input
          type="text"
          className="form-control"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          required
        />
      </div>
      {errors.length > 0 && (
        <div className="alert alert-danger">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
