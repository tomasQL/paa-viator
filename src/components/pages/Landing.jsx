import React, { useState } from 'react';
import { Sun, Moon, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginRegisterPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={`min-h-screen flex items-center justify-center bg-cover bg-center transition-all duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-orange-50'}`} style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}>
            <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-orange-50' : 'bg-white'}`}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-orange-600">
                        {isLogin ? 'Iniciar sesión' : 'Registrarse'}
                    </h2>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-orange-400' : 'bg-orange-100 text-orange-600'}`}
                    >
                        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                </div>
                <p className={`mb-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {isLogin ? 'Ingresa tus credenciales para acceder' : 'Crea una nueva cuenta'}
                </p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="sr-only">Correo electrónico</label>
                        <div className="relative">
                            <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-500' : 'text-orange-400'} h-5 w-5`} />
                            <input
                                id="email"
                                type="email"
                                placeholder="Correo electrónico"
                                className={`w-full pl-10 pr-4 py-2 rounded-lg border ${isDarkMode
                                        ? 'bg-gray-700 border-gray-600 text-orange-50 placeholder-gray-400'
                                        : 'bg-orange-50 border-orange-200 text-gray-800 placeholder-gray-500'
                                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Contraseña</label>
                        <div className="relative">
                            <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-500' : 'text-orange-400'} h-5 w-5`} />
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Contraseña"
                                className={`w-full pl-10 pr-10 py-2 rounded-lg border ${isDarkMode
                                        ? 'bg-gray-700 border-gray-600 text-orange-50 placeholder-gray-400'
                                        : 'bg-orange-50 border-orange-200 text-gray-800 placeholder-gray-500'
                                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <EyeOff className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-orange-400'}`} />
                                ) : (
                                    <Eye className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-orange-400'}`} />
                                )}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 px-4 rounded-lg ${isDarkMode
                                ? 'bg-orange-600 hover:bg-orange-700 text-white'
                                : 'bg-orange-500 hover:bg-orange-600 text-white'
                            } font-semibold transition duration-300`}
                    >
                        {isLogin ? 'Iniciar sesión' : 'Registrarse'}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className={`text-sm ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} hover:underline`}
                    >
                        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterPage;