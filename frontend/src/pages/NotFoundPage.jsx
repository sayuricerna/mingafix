import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'; // Icono

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-center">
            
            <ExclamationTriangleIcon className="w-24 h-24 text-azul-claro mb-6" />
            
            <h1 className="text-5xl font-extrabold text-azul-oscuro mb-3">404</h1>
            
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                ¡Oops! Página No Encontrada
            </h2>
            
            <p className="text-gray-500 mb-8 max-w-sm">
                Parece que te has perdido. La ruta a la que intentas acceder no existe en Mingafix.
            </p>

            <button
                onClick={() => navigate('/profile')} // Redirige a la página principal del usuario
                className="px-8 py-3 text-lg font-semibold text-white rounded-lg 
                           bg-verde-oscuro hover:bg-verde transition duration-150 shadow-md"
            >
                Volver al Perfil
            </button>
            
        </div>
    );
};

export default NotFoundPage;