// src/pages/ProfilePage.jsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { TrophyIcon, StarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

// Datos de ejemplo para el perfil
const userProfile = {
  name: "Sayuri Cerna",
  contributions: 20,
  points: 96,
  ranking: 150,
  badges: 3,
};

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="pt-4"> 
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Mi Perfil</h1>
        </div>

        <div className="flex items-center space-x-4 border-b pb-4 mb-6">
          <div className="w-16 h-16 bg-azul-claro rounded-full flex items-center justify-center text-white text-xl font-bold">
            SC
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">{userProfile.name}</p>
            <p className="text-sm text-gray-500">{userProfile.contributions} contribuciones</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-azul-oscuro">Mi Progreso</h2>
        <div className="grid grid-cols-3 gap-4 mb-8 text-center">
          
          <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <TrophyIcon className="w-6 h-6 mx-auto text-verde-oscuro mb-1" />
            <p className="text-2xl font-extrabold text-gray-800">{userProfile.points}</p>
            <p className="text-xs text-gray-500">Puntos</p>
          </div>
          
          <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <StarIcon className="w-6 h-6 mx-auto text-azul mb-1" />
            <p className="text-2xl font-extrabold text-gray-800">{userProfile.badges}</p>
            <p className="text-xs text-gray-500">Badges</p>
          </div>
          
          <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-6 h-6 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 mb-1">
              #
            </div>
            <p className="text-2xl font-extrabold text-gray-800">#{userProfile.ranking}</p>
            <p className="text-xs text-gray-500">Ranking</p>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4 text-azul-oscuro">Últimos Reportes</h2>
        <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 text-center text-gray-500">
          <p>No tienes reportes recientes.</p>
          <button className="mt-3 text-azul-claro hover:underline text-sm font-medium">
            Ver todos mis reportes
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => navigate('/map')}
            className="flex items-center p-3 text-white font-semibold rounded-lg 
                       bg-verde hover:bg-verde-oscuro transition duration-150 shadow-md"
          >
            <MapPinIcon className="w-5 h-5 mr-2" />
            Ver Mapa
          </button>
        </div>

      </div>
    </MainLayout>
  );
};

export default ProfilePage;