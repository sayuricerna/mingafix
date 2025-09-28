// src/components/LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import useAuth from '../hooks/useAuth.js'; 
const LogoutButton = ({ className = "" }) => {
    const navigate = useNavigate();
    const { logout } = useAuth(); 
    const handleLogout = () => {
        logout();
        navigate('/login'); 
    };

    return (
        <button
            onClick={handleLogout}
            className={`flex items-center space-x-2 text-red-600 hover:text-red-700 transition duration-150 p-2 rounded-lg 
                       hover:bg-red-50 focus:outline-none ${className}`}
        >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            <span className="font-medium">Cerrar Sesión</span>
        </button>
    );
};

export default LogoutButton;