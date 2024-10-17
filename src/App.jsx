import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './App.css'
import './index.css'
import Inicio from './components/Inicio';
import FichaDeIngreso from './components/FichaDeIngreso';
import FichaMedica from './components/FichaMedica';
import Sidebar from './components/pages/Sidebar';
import Header from './components/pages/Header';



function App() {

  // Estado inicial
  // const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');

  // Modo oscuro
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.documentElement.classList.toggle('dark');
  // };

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return <Inicio />;
      case 'calendario':
        return <Calendario />;
      case 'fichas':
        return <FichaMedica />;
      case 'reportes':
        return <FichaDeIngreso />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="ml-64 p-8">
        <main className="mt-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
