// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Task Management App</h1>
      <Link to="/tasks">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Go to Task Manager
        </button>
      </Link>
    </div>
  );
};

export default Home;
