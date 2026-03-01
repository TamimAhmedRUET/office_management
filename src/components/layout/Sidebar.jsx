import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../../app/router/navigation';
import { useAuth } from '../../hooks/useAuth';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const { role } = useAuth();

    // Filter navigation items based on user role
    const visibleNavItems = NAVIGATION.filter(item => item.roles.includes(role));

    return (
        <>
            {/* Mobile sidebar overlay */}
            <div
                className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
                onClick={() => setIsOpen(false)}
            ></div>

            <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static lg:inset-auto flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-center h-16 bg-gray-900 border-b border-gray-800">
                    <span className="text-white font-bold text-lg uppercase tracking-wider">Enterprise OS</span>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                    {visibleNavItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                }`
                            }
                        >
                            <span className="font-medium text-sm">{item.title}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 bg-gray-800">
                    <p className="text-xs text-gray-400">Current Role:</p>
                    <p className="text-sm text-gray-200 font-semibold">{role}</p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
