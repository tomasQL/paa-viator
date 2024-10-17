import React from 'react';
import { User } from 'lucide-react';

const Calendario = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const shifts = {
        5: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }],
        10: [{ id: 3, name: 'User 3' }],
        15: [{ id: 4, name: 'User 4' }, { id: 5, name: 'User 5' }],
    };

    const bgColor = darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';

    return (
        <div className={`p-4 rounded-lg shadow-lg ${bgColor}`}>
            <h2 className="text-xl font-bold text-center mb-4">
                {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="grid grid-cols-7 gap-2">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                    <div key={day} className="text-center font-bold">
                        {day}
                    </div>
                ))}
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div key={`empty-${index}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const hasShift = shifts[day];
                    const isToday = day === currentDate.getDate();
                    return (
                        <div
                            key={day}
                            className={`relative p-2 text-center border ${darkMode ? 'border-gray-700' : 'border-gray-200'
                                } rounded-lg ${isToday ? 'bg-blue-100 dark:bg-blue-900' : ''
                                }`}
                        >
                            {day}
                            {hasShift && (
                                <div className="absolute bottom-1 right-1 flex -space-x-1">
                                    {hasShift.map((user) => (
                                        <div
                                            key={user.id}
                                            className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"
                                            title={user.name}
                                        >
                                            <User className="w-4 h-4 text-white" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendario;