import React, { useState } from 'react'
import { Stethoscope, Calendar } from 'lucide-react'

const FichaMedica = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        refPaciente: '',
        especie: '',
        raza: '',
        edadAprox: '',
        peso: '',
        condicionesMedicas: '',
        medicamentos: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                <h2 className="text-3xl font-semibold flex items-center">
                    <Stethoscope className="mr-2" />
                    Ficha de Ingreso
                </h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Referencia del Paciente</label>
                        <input
                            type="text"
                            name="refPaciente"
                            value={formData.refPaciente}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    {/* Añade más campos del formulario aquí */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                    >
                        Guardar Ficha Médica
                    </button>
                </form>
                <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                        <Calendar className="mr-2" />
                        Evolución VIATOR - CEREFAS
                    </h3>
                    {/* Aquí puedes añadir la información de evolución */}
                </div>
            </div>
        </div>
    )
}

export default FichaMedica;