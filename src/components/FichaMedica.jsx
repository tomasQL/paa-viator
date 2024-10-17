import React, { useState } from 'react'
import { Stethoscope, Calendar, Clipboard, Heart, PawPrint, Weight, Syringe, Pill, AlertCircle } from 'lucide-react'

const FichaMedica = () => {
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
        // Aquí puedes manejar el envío del formulario
        console.log(formData);
    };

    //     const sampleRecords = [
    //         { date: '2023-03-15', event: 'Annual checkup', details: 'All vitals normal, updated vaccinations' },
    //         { date: '2023-06-22', event: 'Skin allergy', details: 'Prescribed antihistamines and special shampoo' },
    //         { date: '2023-09-10', event: 'Dental cleaning', details: 'No cavities, slight tartar buildup removed' },
    //         { date: '2024-01-05', event: 'Sprained paw', details: 'Rest recommended, anti-inflammatory medication prescribed' },
    //     ]

    return (
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <h2 className="text-3xl font-semibold flex items-center">
                    <Stethoscope className="mr-2" />
                    Ficha de Ingreso
                </h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Referencia del Paciente</label>
                            <input
                                type="text"
                                name="refPaciente"
                                value={formData.refPaciente}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Especie</label>
                                <input
                                    type="text"
                                    name="especie"
                                    value={formData.especie}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Raza</label>
                                <input
                                    type="text"
                                    name="Raza"
                                    value={formData.raza}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Edad Aproximada</label>
                                <input
                                    type="date"
                                    name="edadAproximada"
                                    value={formData.edadAprox}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                                <input
                                    type="number"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Condiciones Médicas</label>
                            <textarea
                                name="condicionesMedicas"
                                value={formData.condicionesMedicas}
                                onChange={handleChange}
                                rows={3}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Medicamentos</label>
                            <textarea
                                name="medicamentos"
                                value={formData.medicamentos}
                                onChange={handleChange}
                                rows={2}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                        >
                            Guardar Ficha Médica
                        </button>
                    </form>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Calendar className="mr-2" />
                        Evolución VIATOR - CEREFAS
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default FichaMedica;

// <div className="space-y-4">
// {sampleRecords.map((record, index) => (
//     <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
//         <div className="flex items-center justify-between mb-2">
//             <span className="text-sm font-medium text-blue-600">{record.date}</span>
//             <span className="text-sm font-semibold">{record.event}</span>
//         </div>
//         <p className="text-sm text-gray-600">{record.details}</p>
//     </div>
// ))}
// </div>