// src/components/Theme.jsx
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <FaSun className="w-6 h-6 text-green-600" />
      ) : (
        <FaMoon className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );
};

export default Theme;
