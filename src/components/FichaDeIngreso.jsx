// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
//  Librería de Íconos únicamente, queda pendiente usar assets propios
import { Sun, Moon, Paperclip } from 'lucide-react';


const FichaDeIngreso = () => {

    //  Modo oscuro desactivado por defecto
    const [darkMode, setDarkMode] = useState(false);
    const [files, setFiles] = useState([]);

    //  Handler que se encarga del cambio de estado cuando se elige un archivo
    const handleFileChange = (event) => {
        setFiles([...files, ...event.target.files])
    };

    //  Handler que remueve uno de los archivos seleccionados y retorna la misma
    //  lista de elementos eliminando el clickedo
    const removeFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    //  Handler que switchea el estado de modo oscuro y claro 
    //  (niega el boolean de darkmode de false a true)
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
            </style>
            <div className={`min-h-screen font-['Source_Code_Pro'] ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
                <div className="container mx-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">Ficha Médica Veterinaria - Fauna Silvestre</h1>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full shadow-lg transition-transform transform ${darkMode ? 'bg-orange-500 text-gray-900' : 'bg-green-500 text-white'}`}
                        >
                            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Campos de texto */}
                            {[
                                'Nombre del paciente', 'Especie', 'Edad estimada', 'Sexo',
                                'Peso', 'Longitud', 'Procedencia', 'Fecha de ingreso',
                                'Motivo de consulta', 'Signos clínicos', 'Temperatura',
                            ].map((label) => (
                                <div key={label}>
                                    <label className="block text-sm font-medium mb-1">{label}</label>
                                    <input
                                        type="text"
                                        className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-md focus:shadow-lg transition-shadow duration-200 ease-in-out`}
                                    />
                                </div>
                            ))}
                            {/* Checkboxes */}
                            {[
                                { label: 'Vacunas al día', options: ['Sí', 'No', 'Desconocido'] },
                                { label: 'Desparasitación', options: ['Al día', 'Pendiente', 'No aplica'] },
                                { label: 'Estado reproductivo', options: ['Castrado', 'Entero', 'Gestante', 'Lactante'] },
                                { label: 'Comportamiento', options: ['Dócil', 'Agresivo', 'Asustado', 'Letárgico'] }
                            ].map((field) => (
                                <div key={field.label}>
                                    <label className="block text-sm font-medium mb-1">{field.label}</label>
                                    <div className="space-y-2">
                                        {field.options.map((option) => (
                                            <label key={option} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox text-green-500 rounded-full shadow-sm focus:ring-0 transition-transform transform hover:scale-105"
                                                />
                                                <span className="ml-2">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {/* Campos de texto */}
                            {[
                                'Frecuencia cardíaca', 'Frecuencia respiratoria', 'Estado de hidratación',
                                'Condición corporal', 'Examen físico general', 'Diagnóstico presuntivo',
                                'Pruebas diagnósticas', 'Tratamiento', 'Pronóstico', 'Observaciones',
                                'Veterinario responsable'
                            ].map((label) => (
                                <div key={label}>
                                    <label className="block text-sm font-medium mb-1">{label}</label>
                                    <input
                                        type="text"
                                        className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-md focus:shadow-lg transition-shadow duration-200 ease-in-out`}
                                    />
                                </div>
                            ))}

                            {/* Listas de selección */}
                            {[
                                { label: 'Tipo de hábitat', options: ['Bosque', 'Pradera', 'Montaña', 'Costa', 'Humedal', 'Desierto', 'Urbano'] },
                                { label: 'Categoría de conservación', options: ['En peligro crítico', 'En peligro', 'Vulnerable', 'Casi amenazada', 'Preocupación menor', 'Datos insuficientes'] },
                                { label: 'Dieta principal', options: ['Carnívoro', 'Herbívoro', 'Omnívoro', 'Insectívoro', 'Frugívoro', 'Nectarívoro'] },
                                { label: 'Estado de alerta', options: ['Alerta', 'Responde a estímulos', 'Letárgico', 'Inconsciente'] },
                                { label: 'Nivel de dolor', options: ['Sin dolor aparente', 'Dolor leve', 'Dolor moderado', 'Dolor severo'] },
                                { label: 'Plan de manejo', options: ['Tratamiento ambulatorio', 'Hospitalización', 'Cirugía', 'Eutanasia', 'Rehabilitación', 'Liberación'] }
                            ].map((field) => (
                                <div key={field.label}>
                                    <label className="block text-sm font-medium mb-1">{field.label}</label>
                                    <select
                                        className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-md focus:shadow-lg transition-shadow duration-200 ease-in-out`}
                                    >
                                        <option value="">Seleccionar</option>
                                        {field.options.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>




                        <div className="col-span-full">
                            <label className="block text-sm font-medium mb-1">Adjuntar archivos</label>
                            <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg ${darkMode ? 'border-gray-700' : 'border-gray-300'} shadow-inner`}>
                                <div className="space-y-1 text-center">
                                    <Paperclip className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm">
                                        <label htmlFor="file-upload" className={`relative cursor-pointer rounded-md font-medium ${darkMode ? 'text-orange-400' : 'text-green-600'}`}>
                                            <span>Subir archivos</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple onChange={handleFileChange} />
                                        </label>
                                        <p className="pl-1">o arrastrar y soltar</p>
                                    </div>
                                    <p className="text-xs">PNG, JPG, PDF hasta 10MB</p>
                                </div>
                            </div>
                        </div>

                        {/* Lista de archivos adjuntos */}
                        {files.length > 0 && (
                            <div className="col-span-full">
                                <h3 className="text-sm font-medium mb-2">Archivos adjuntos:</h3>
                                <ul className="divide-y divide-gray-200">
                                    {files.map((file, index) => (
                                        <li key={index} className="py-3 flex justify-between items-center">
                                            <span className="text-sm">{file.name}</span>
                                            <button
                                                type="button"
                                                onClick={() => removeFile(index)}
                                                className={`ml-2 text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-green-600'} transition-transform transform hover:scale-105`}
                                            >
                                                Eliminar
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`w-full p-3 rounded-lg font-medium shadow-md transition-shadow transform hover:shadow-lg ${darkMode ? 'bg-orange-500 text-gray-900' : 'bg-green-600 text-white'}`}
                        >
                            Guardar Ficha Médica
                        </button>
                    </form>
                </div >
            </div >
        </>
    );
};

export default FichaDeIngreso;
