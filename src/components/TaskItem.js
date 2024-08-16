// src/components/TaskItem.js

import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`bg-${task.completed ? 'green-100' : 'gray-100'} border-l-4 ${
        task.completed ? 'border-green-500' : 'border-blue-500'
      } p-4 mb-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 ${
        task.completed ? 'line-through' : ''
      }`}
    >
      <h3 className="flex justify-between items-center">
        {task.title}
        <div>
          <button
            className="ml-2 text-blue-500 hover:text-blue-700 transition duration-200"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
          <button
            className="ml-2 text-blue-500 hover:text-blue-700 transition duration-200"
            onClick={() => onToggle(task.id)}
          >
            {task.completed ? 'Undo' : 'Complete'}
          </button>
        </div>
      </h3>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
    </div>
  );
};

export default TaskItem;
