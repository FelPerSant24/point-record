import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-6 flex flex-col items-center">
      <div className="flex items-center mb-10">
        <svg
          className="w-8 h-8 text-blue-600 mr-2"
          fill="currentColor"
          viewBox="0 0 40 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 112 0 1 1 0 01-2 0zm6 0a1 1 0 112 0 1 1 0 01-2 0zm-3 7a4 4 0 01-4-4h8a4 4 0 01-4 4z"></path>
        </svg>
        <span className="text-xl font-bold text-gray-800">Confeitaria Pita</span>
      </div>
      <nav className="w-full">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Página Inicial
            </Link>
          </li>
          
          <li>
            <Link
              to="/reports"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 2a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1H9zM8 8a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1H8zM6 14a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2z"></path>
              </svg>
              Ajustes de Ponto
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a.5.5 0 00-.5.5v3.5a.5.5 0 001 0V3a.5.5 0 00-.5-.5zM15 10a.5.5 0 01-.5.5h-3.5a.5.5 0 010-1h4a.5.5 0 01.5.5zM5 10a.5.5 0 00.5.5h3.5a.5.5 0 000-1h-4A.5.5 0 005 10zm7-4a.5.5 0 01.5-.5h3.5a.5.5 0 010 1h-4A.5.5 0 0112 6zM8 14a.5.5 0 00-.5.5v3.5a.5.5 0 001 0V15a.5.5 0 00-.5-.5z"></path>
              </svg>
              Dados Pessoais
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;