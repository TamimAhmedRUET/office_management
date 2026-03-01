import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
    const { user, logout } = useAuth();

    return (
        <header className="flex-shrink-0 bg-white shadow-sm z-10">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

                {/* Mobile menu button */}
                <button
                    onClick={toggleSidebar}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div className="flex-1 px-4 flex justify-between">
                    <div className="flex-1 flex">
                        {/* Search can go here */}
                    </div>
                    <div className="ml-4 flex items-center md:ml-6 gap-4">
                        <span className="text-sm font-medium text-gray-700 hidden sm:block">
                            Welcome, {user?.name}
                        </span>
                        <button
                            onClick={logout}
                            className="px-4 py-2 text-sm font-medium rounded-md text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
