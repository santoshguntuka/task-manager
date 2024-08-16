// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 shadow-md">
      <div className="container mx-auto text-center">
        <Link to="/">
          <h1 className="text-3xl font-bold cursor-pointer">Task Management App</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
