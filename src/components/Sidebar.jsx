import React from 'react';
import { Origami, CalendarDays, FileText, Package, FileChartColumn, Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ darkMode, toggleDarkMode, sidebarOpen, toggleSidebar, activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'inicio', label: 'Inicio', icon: Origami },
        { id: 'calendario', label: 'Calendario de turnos', icon: CalendarDays },
        { id: 'fichas', label: 'Ingresar paciente', icon: FileText },
        { id: 'archivo', label: 'Archivo Histórico', icon: Package },
    ];

    return (
        <aside className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} border-r border-gray-200 dark:border-gray-700`}>
            <div className="flex justify-between items-center p-4">
                {sidebarOpen && <h1 className="text-2xl font-bold text-orange-500">Viator</h1>}
                <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
                </button>
            </div>
            <nav className="mt-8">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id} className="mb-2 px-4">
                            <button
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center w-full p-2 rounded-lg transition-colors duration-200 ${activeTab === item.id
                                    ? 'bg-orange-500 text-white'
                                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <item.icon className="mr-3" size={20} />
                                {sidebarOpen && <span>{item.label}</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-400" />}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;