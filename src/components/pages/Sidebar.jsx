import React, { useState, useEffect } from 'react';
import { Origami, CalendarDays, FileText, Package, FileChartColumn, Sun, Moon } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const [modoOscuro, setModoOscuro] = useState(true);

    useEffect(() => {
        // Sync the dark mode with the main app's state
        const isDarkMode = document.documentElement.classList.contains('dark');
        setModoOscuro(isDarkMode);
    }, []);

    const toggleModoOscuro = () => {
        const newMode = !modoOscuro;
        setModoOscuro(newMode);
        document.documentElement.classList.toggle('dark', newMode);
    };

    const menuItems = [
        { id: 'inicio', label: 'Inicio', icon: Origami },
        { id: 'calendario', label: 'Calendario de turnos', icon: CalendarDays },
        { id: 'fichas', label: 'Fichas médicas', icon: FileText },
        { id: 'reportes', label: 'Reportes', icon: FileChartColumn },
        { id: 'archivo', label: 'Archivo Histórico', icon: Package },
    ];

    const temaClases = modoOscuro
        ? 'bg-gray-900 text-white'
        : 'bg-gray-100 text-gray-900';

    return (
        <aside className={`fixed left-0 top-0 h-full w-64 ${temaClases} p-6 border-r border-gray-700 dark:border-gray-600`}>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-orange-500">VIATOR</h1>
                <button
                    onClick={toggleModoOscuro}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                    {modoOscuro ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-400" />}
                </button>
            </div>
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id} className="mb-4">
                            <button
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${activeTab === item.id
                                    ? 'bg-orange-500 text-white'
                                    : 'hover:bg-gray-800 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <item.icon className="mr-3" size={20} />
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;