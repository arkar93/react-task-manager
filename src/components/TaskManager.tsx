import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { Task } from "../interfaces/types";
import API_BASE_URL from "../config";

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/tasks`)
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const addTask = (task: Omit<Task, "id">) => {
    axios
      .post(`${API_BASE_URL}/tasks`, task)
      .then((response) => setTasks([...tasks, response.data]))
      .catch((error) => {
        if (error.response && error.response.data.errors) {
          console.error("Validation errors:", error.response.data.errors);
        } else {
          console.error("Error adding task:", error);
        }
      });
  };

  const deleteTask = (id: number) => {
    axios
      .delete(`${API_BASE_URL}/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div className="container mt-5">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskManager;
