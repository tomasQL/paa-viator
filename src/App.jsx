// import React, { useState } from 'react';
// import { Sun, Moon } from 'lucide-react';
// import './App.css'
// import './index.css'
// import Inicio from './components/Inicio';
// import FichaDeIngreso from './components/FichaDeIngreso';
// import FichaMedica from './components/FichaMedica';
// import Sidebar from './components/pages/Sidebar';
// import Header from './components/pages/Header';
// import Footer from './components/pages/Footer';
// 
// 
// 
// function App() {
// 
//   // Estado inicial
//   // const [darkMode, setDarkMode] = useState(false);
//   const [activeTab, setActiveTab] = useState('inicio');
// 
//   // Modo oscuro
//   // const toggleDarkMode = () => {
//   //   setDarkMode(!darkMode);
//   //   document.documentElement.classList.toggle('dark');
//   // };
// 
//   const renderContent = () => {
//     switch (activeTab) {
//       case 'inicio':
//         return <Inicio />;
//       case 'calendario':
//         return <Calendario />;
//       case 'fichas':
//         return <FichaMedica />;
//       case 'reportes':
//         return <FichaDeIngreso />;
//     }
//   };
// 
//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-8">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//       <div className="ml-64 p-8">
//         <main className="mt-8">
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// }
// 
// export default App;


import React, { useState } from 'react';
import Sidebar from './components/pages/Sidebar';
import Inicio from './components/Inicio';
import FichaMedica from './components/FichaMedica';
import FichaDeIngreso from './components/FichaDeIngreso.jsx';
import Archivo from './components/Archivo';
// Importa otros componentes necesarios

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('inicio');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      <Sidebar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {activeTab === 'inicio' && <Inicio darkMode={darkMode} />}
        {activeTab === 'fichas' && <FichaDeIngreso darkMode={darkMode} />}
        {activeTab === 'archivo' && <Archivo darkMode={darkMode} />}
        {/* Añade más condiciones para otros componentes */}
      </main>
    </div>
  );
};

export default App;
