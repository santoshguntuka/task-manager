import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
};

export default TaskList;
