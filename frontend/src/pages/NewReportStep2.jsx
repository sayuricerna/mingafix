// src/pages/NewReportStep2.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon, XMarkIcon } from '@heroicons/react/24/solid';

const categories = [
  { id: 'accidente', name: 'Accidente' },
  { id: 'derrumbe', name: 'Derrumbe' },
  { id: 'basura', name: 'Basura' },
  { id: 'semaforo', name: 'Semáforo dañado' },
  { id: 'otro', name: 'Otro' },
];

const NewReportStep2 = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [location, setLocation] = useState("Ubicación Automática: Av. quito y amazonas, Sector Mariscal");
  const handleFinish = () => {
    if (!selectedCategory) return;
    navigate('/report/step3'); 
  };
  
  const isDisabled = !selectedCategory;

  return (
    <div className="mx-auto max-w-lg min-h-screen bg-gray-50 p-4 flex flex-col">
      <header className="flex justify-between items-center py-4 mb-4 border-b">
        <h1 className="text-xl font-bold text-azul-oscuro">Añadir Reporte (2/3)</h1>
        <button onClick={() => navigate('/profile')} className="text-gray-500 hover:text-red-500">
          <XMarkIcon className="w-6 h-6" />
        </button>
      </header>
      
      <main className="flex-grow">
        
        <h2 className="text-lg font-semibold mb-3 text-gray-700">1. Ubicación</h2>
        <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200 mb-6">
          <div className="flex items-center space-x-3">
            <MapPinIcon className="w-6 h-6 text-azul-claro" />
            <p className="font-medium text-gray-800">{location}</p>
          </div>
          <div className="h-24 bg-gray-200 mt-3 rounded-lg flex items-center justify-center text-sm text-gray-500">
            
            <div>
                
            </div>
        
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-3 text-gray-700">2. Escoger Categoría</h2>
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
          {categories.map((cat) => (
            <label 
              key={cat.id} 
              className="flex items-center py-3 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 transition duration-100"
            >
              <input
                type="radio"
                name="category"
                value={cat.id}
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                className="h-5 w-5 text-verde-oscuro focus:ring-verde-claro border-gray-300"
              />
              <span className="ml-3 text-base font-medium text-gray-700">{cat.name}</span>
            </label>
          ))}
        </div>
        
      </main>

      <footer className="py-4 border-t bg-gray-50">
        <button 
          onClick={handleFinish}
          disabled={isDisabled}
          className={`w-full p-4 text-white font-semibold rounded-lg transition duration-150 shadow-md
            ${isDisabled 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-azul-oscuro hover:bg-azul-mas-oscuro'}`
          }
        >
          Continuar
        </button>
      </footer>
    </div>
  );
};

export default NewReportStep2;