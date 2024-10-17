import React, { useState } from 'react';
import { Sun, Moon, Dog, Cat, Clock, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const datosEjemplo = [
    { nombre: 'Lun', procedimientos: 4 },
    { nombre: 'Mar', procedimientos: 3 },
    { nombre: 'Mié', procedimientos: 2 },
    { nombre: 'Jue', procedimientos: 5 },
    { nombre: 'Vie', procedimientos: 6 },
    { nombre: 'Sáb', procedimientos: 4 },
    { nombre: 'Dom', procedimientos: 3 },
];

const pacientesEjemplo = [
    { id: 1, nombre: 'Max', especie: 'Perro', raza: 'L', ultimaVisita: '2024-10-15' },
    { id: 2, nombre: 'Luna', especie: 'Gato', raza: 'S', ultimaVisita: '2024-10-16' },
    { id: 3, nombre: 'Rocky', especie: 'Perro', raza: 'Bulldog', ultimaVisita: '2024-10-17' },
];

function Inicio() {
    const [modoOscuro, setModoOscuro] = useState(true);

    const toggleModoOscuro = () => setModoOscuro(!modoOscuro);

    const temaClases = modoOscuro
        ? 'bg-gray-900 text-white'
        : 'bg-gray-100 text-gray-900';

    const cardClases = modoOscuro
        ? 'bg-gray-800 text-white'
        : 'bg-white text-gray-900';

    return (
        <div className={`min-h-screen p-8 ${temaClases}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Control de Inicio</h1>
                    <button
                        onClick={toggleModoOscuro}
                        className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                        {modoOscuro ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-400" />}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className={`p-6 rounded-lg shadow ${cardClases}`}>
                        <div className="flex items-center">
                            <Dog className="w-10 h-10 text-orange-500 mr-4" />
                            <div>
                                <p className="text-sm uppercase">Pacientes</p>
                                <p className="text-2xl font-semibold">41</p>
                            </div>
                        </div>
                    </div>
                    <div className={`p-6 rounded-lg shadow ${cardClases}`}>
                        <div className="flex items-center">
                            <Users className="w-10 h-10 text-orange-500 mr-4" />
                            <div>
                                <p className="text-sm uppercase">Anteriores</p>
                                <p className="text-2xl font-semibold">98</p>
                            </div>
                        </div>
                    </div>
                    <div className={`p-6 rounded-lg shadow ${cardClases}`}>
                        <div className="flex items-center">
                            <Clock className="w-10 h-10 text-orange-500 mr-4" />
                            <div>
                                <p className="text-sm uppercase">Tareas de Hoy</p>
                                <p className="text-2xl font-semibold">12</p>
                            </div>
                        </div>
                    </div>
                    <div className={`p-6 rounded-lg shadow ${cardClases}`}>
                        <div className="flex items-center">
                            <Cat className="w-10 h-10 text-orange-500 mr-4" />
                            <div>
                                <p className="text-sm uppercase">Tareas Pendientes</p>
                                <p className="text-2xl font-semibold">8</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className={`p-6 rounded-lg shadow ${cardClases}`}>
                        <h2 className="text-xl font-semibold mb-4">procedimientos Semanales</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={datosEjemplo}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="nombre" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="procedimientos" stroke="#f97316" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={`p-6 rounded-lg shadow ${cardClases}`}>
                        <h2 className="text-xl font-semibold mb-4">Pacientes Recientes</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="text-left py-2">Nombre</th>
                                        <th className="text-left py-2">Especie</th>
                                        <th className="text-left py-2">Raza</th>
                                        <th className="text-left py-2">Última Visita</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pacientesEjemplo.map((paciente) => (
                                        <tr key={paciente.id} className="border-b border-gray-700">
                                            <td className="py-2">{paciente.nombre}</td>
                                            <td className="py-2">{paciente.especie}</td>
                                            <td className="py-2">{paciente.raza}</td>
                                            <td className="py-2">{paciente.ultimaVisita}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Inicio;