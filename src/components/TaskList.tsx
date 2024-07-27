import React from "react";
import { Task } from "../interfaces/types";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h5>{task.name}</h5>
            <p>{task.description}</p>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
