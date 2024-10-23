import React from 'react';
import { Bird, Beef, Users, ClipboardPlus, Wind, RefreshCcw } from 'lucide-react';
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
    { id: 1, nombre: 'Zorro Chilote', ultimoProcedimiento: 'Radiografía' },
    { id: 2, nombre: 'Chuncho', ultimoProcedimiento: 'Alimentación' },
    { id: 3, nombre: 'Bandurria', ultimoProcedimiento: 'Limpieza jaula' },
];

const Inicio = ({ darkMode }) => {

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Resumen</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { icon: Bird, label: 'Pacientes', value: 41 },
                    { icon: Users, label: 'Turno de hoy', value: 6 },
                    { icon: ClipboardPlus, label: 'Tareas de Hoy', value: 12 },
                    { icon: Beef, label: 'Alimentaciones', value: 8 },
                    { icon: Wind, label: 'Vuelos', value: 0 },
                    { icon: RefreshCcw, label: 'Limpiezas', value: 4 },
                ].map((item, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <div className="flex items-center">
                            <item.icon className="w-10 h-10 text-orange-500 mr-4" />
                            <div>
                                <p className="text-sm uppercase text-gray-600 dark:text-gray-400">{item.label}</p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{item.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Procedimientos Semanales</h2>
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
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Pacientes Recientes</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-2 text-gray-600 dark:text-gray-400">Nombre</th>
                                    <th className="text-left py-2 text-gray-600 dark:text-gray-400">Último Procedimiento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pacientesEjemplo.map((paciente) => (
                                    <tr key={paciente.id} className="border-b border-gray-200 dark:border-gray-700">
                                        <td className="py-2 text-gray-900 dark:text-white">{paciente.nombre}</td>
                                        <td className="py-2 text-gray-900 dark:text-white">{paciente.ultimoProcedimiento}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;