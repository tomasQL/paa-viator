import React, { useState } from 'react';
import { Sun, Moon, Paperclip, Clipboard, Stethoscope, FileText, User, Calendar } from 'lucide-react';

const FichaDeIngreso = ({ darkMode, setDarkMode }) => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        setFiles([...files, ...event.target.files]);
    };

    const removeFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const SectionHeader = ({ icon, title }) => (
        <div className="flex items-center space-x-2 mb-4 bg-orange-100 dark:bg-gray-800 p-2 rounded-t-lg">
            {icon}
            <h2 className="text-xl font-semibold">{title}</h2>
        </div>
    );

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className="container mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Ficha de Ingreso</h1>
                </div>

                <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
                    <SectionHeader icon={<Clipboard className="text-orange-500" />} title="Reseña" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            'Nombre común', 'Especie', 'Edad', 'Sexo',
                            'Peso', 'Marcas ID (chip)', 'Procedencia', 'Fecha de ingreso'
                        ].map((label) => (
                            <div key={label}>
                                <label className="block text-sm font-medium mb-1">{label}</label>
                                <input
                                    type="text"
                                    className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                                />
                            </div>
                        ))}
                    </div>

                    <SectionHeader icon={<User className="text-orange-500" />} title="Anamnesis" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            'Donante', 'Fono', 'Dirección', 'Obtención del animal',
                            'Alimentación', 'Tratamientos', 'N° Acta'
                        ].map((label) => (
                            <div key={label}>
                                <label className="block text-sm font-medium mb-1">{label}</label>
                                <input
                                    type="text"
                                    className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                                />
                            </div>
                        ))}
                    </div>

                    <SectionHeader icon={<Stethoscope className="text-orange-500" />} title="Examen clínico" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { label: 'Apariencia', options: ['Saludable', 'Descuidado', 'Sucio'] },
                            { label: 'Comportamiento', options: ['Depresivo', 'Tranquilo', 'Alerta', 'Agresivo'] },
                            { label: 'Expresión facial', options: ['Relajado', 'Miedo', 'Dolor'] },
                            { label: 'Marcha/vuelo', options: ['Sin alteración', 'Claudicación', 'Fractura'] }
                        ].map((field) => (
                            <div key={field.label}>
                                <label className="block text-sm font-medium mb-1">{field.label}</label>
                                <div className="space-y-1">
                                    {field.options.map((option) => (
                                        <label key={option} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-orange-500"
                                            />
                                            <span className="ml-2 text-sm">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <h3 className="font-medium mb-2">Frecuencias y ctes.</h3>
                            <div className="space-y-2">
                                {['FR', 'FC', 'T°'].map((label) => (
                                    <div key={label} className="flex items-center">
                                        <span className="w-8">{label}</span>
                                        <input type="text" className={`w-full p-1 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Plumaje</h3>
                            <div className="space-y-1">
                                {['Pigmentación', 'Suavidad', 'Largo', 'Brillo', 'Adherencia', 'Integridad'].map((option) => (
                                    <label key={option} className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-orange-500" />
                                        <span className="ml-2 text-sm">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Piel</h3>
                            <div className="space-y-1">
                                {['Pigmentación', 'Olor sui generis', 'Temperatura', 'Elasticidad', 'Secreciones'].map((option) => (
                                    <label key={option} className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-orange-500" />
                                        <span className="ml-2 text-sm">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <SectionHeader icon={<FileText className="text-orange-500" />} title="Conclusiones" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-medium mb-2">Sistema(s) afectado(s):</h3>
                            <div className="space-y-1">
                                {['Visual', 'Auditivo', 'Digestivo', 'Respiratorio', 'Locomotor', 'Tegumentario', 'Nervioso'].map((system) => (
                                    <label key={system} className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-orange-500" />
                                        <span className="ml-2 text-sm">{system}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <h3 className="font-medium mb-2">Curso:</h3>
                                <div className="space-x-4">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="curso" className="form-radio text-orange-500" />
                                        <span className="ml-2">Agudo</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="curso" className="form-radio text-orange-500" />
                                        <span className="ml-2">Crónico</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">Estado gral afectado:</h3>
                                <div className="space-x-4">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="estado" className="form-radio text-orange-500" />
                                        <span className="ml-2">SI</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="estado" className="form-radio text-orange-500" />
                                        <span className="ml-2">NO</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Diagnóstico:</label>
                        <textarea
                            className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                            rows="3"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Plan de Tratamiento:</label>
                        <textarea
                            className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Voluntario:</label>
                            <input
                                type="text"
                                className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Médico Veterinario:</label>
                            <input
                                type="text"
                                className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                            />
                        </div>
                    </div>

                    <SectionHeader icon={<Calendar className="text-orange-500" />} title="Fecha egreso" />
                    <div className="flex space-x-4">
                        {['Liberación', 'Derivación', 'Muerte', 'Eutanasia'].map((option) => (
                            <label key={option} className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox text-orange-500" />
                                <span className="ml-2">{option}</span>
                            </label>
                        ))}
                    </div>

                    {/* Adjuntar Archivos */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Adjuntar archivos</label>
                        <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
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
                        <div>
                            <h3 className="text-sm font-medium mb-2">Archivos adjuntos:</h3>
                            <ul className="divide-y divide-gray-200">
                                {files.map((file, index) => (
                                    <li key={index} className="py-3 flex justify-between items-center">
                                        <span className="text-sm">{file.name}</span>
                                        <button
                                            type="button"
                                            onClick={() => removeFile(index)}
                                            className={`ml-2 text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-green-600'}`}
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
                        className={`w-full p-3 rounded-lg font-medium shadow-md transition-shadow ${darkMode ? 'bg-orange-500 text-gray-900' : 'bg-green-600 text-white'}`}
                    >
                        Guardar Ficha de Ingreso
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FichaDeIngreso;