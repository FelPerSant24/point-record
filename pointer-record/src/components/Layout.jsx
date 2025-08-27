import React from 'react';
import Sidebar from './Sidebar'; // Importe o componente da sidebar

function Layout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Aqui fica a nossa sidebar que será fixa */}
      <Sidebar />
      {/* Aqui fica o conteúdo dinâmico da página */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}

export default Layout;