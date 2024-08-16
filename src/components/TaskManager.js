// src/components/TaskManager.js

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TaskManager = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
          <TaskForm onAdd={addTask} />
          <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TaskManager;
