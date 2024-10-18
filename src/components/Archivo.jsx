import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Bird, Dog } from 'lucide-react';

const Archivo = () => {
    const [fichas, setFichas] = useState([
        { id: 1, fecha: '2023-10-15', motivoIngreso: 'Ala Izquierda Fracturada', salida: '2023-10-20', sag: 'Entregado', tipo: 'ave' },
        { id: 2, fecha: '2023-09-01', motivoIngreso: 'Herida Expuesta', salida: '2023-09-02', sag: 'Pendiente', tipo: 'terrestre' },
        { id: 3, fecha: '2023-08-20', motivoIngreso: 'Desnutrido', salida: '2023-08-22', sag: 'Entregado', tipo: 'ave' },
        // Añada más fichas según sea necesario
    ]);
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);

    const toggleFilter = (filter) => {
        setActiveFilters(prev =>
            prev.includes(filter)
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
        );
    };
    const removeFilter = (filter) => {
        setActiveFilters(prev => prev.filter(f => f !== filter));
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Fichas Archivadas</h1>

            <div className="relative mb-6">
                <div className="flex items-center bg-gray-800 rounded-lg">
                    <Search className="ml-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar fichas..."
                        className="w-full bg-transparent text-white py-2 px-4 focus:outline-none"
                    />
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`p-2 rounded-r-lg transition-colors ${showFilters ? 'bg-orange-500' : 'bg-gray-700 hover:bg-gray-600'}`}
                    >
                        <Filter className="text-white" />
                    </button>
                </div>

                {showFilters && (
                    <div className="absolute z-10 mt-2 p-4 bg-gray-800 rounded-lg shadow-lg w-full">
                        <div className="flex flex-wrap gap-2">
                            {['Aves', 'Terrestres', 'Cirugía', 'Vacunación', 'Pendiente SAG', 'Entregado SAG'].map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => toggleFilter(filter)}
                                    className={`px-3 py-1 rounded-full text-sm ${activeFilters.includes(filter)
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {activeFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {activeFilters.map(filter => (
                        <span key={filter} className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                            {filter}
                            <button onClick={() => removeFilter(filter)} className="ml-2">
                                <X size={14} />
                            </button>
                        </span>
                    ))}
                </div>
            )}

            <div className="space-y-4">
                {fichas.map(ficha => (
                    <div key={ficha.id} className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
                        {ficha.tipo === 'ave' ? (
                            <Bird className="text-orange-500" size={24} />
                        ) : (
                            <Dog className="text-orange-500" size={24} />
                        )}
                        <div className="flex-grow">
                            <p className="text-sm text-gray-400">Recepción: {ficha.fecha}</p>
                            <p className="font-semibold">{ficha.motivoIngreso}</p>
                            <p className="text-sm text-gray-400">Salida: {ficha.salida} | SAG: {ficha.sag}</p>
                        </div>
                        <ChevronDown className="text-gray-400 cursor-pointer" />
                    </div>
                ))}
            </div>

            <button className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                Cargar más
            </button>
        </div>
    );
};

export default Archivo;