import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import FileUploader from '../components/FileUploader';
import { XMarkIcon } from '@heroicons/react/24/solid';

const NewReportStep1 = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [blurActive, setBlurActive] = useState(false);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setPhotos([...photos, ...files.map(file => URL.createObjectURL(file))]);
  };

  const handleRemovePhoto = (urlToRemove) => {
    setPhotos(photos.filter(url => url !== urlToRemove));
  };

  const handleContinue = () => {
    navigate('/report/step2'); 
  };
  
  const isDisabled = photos.length === 0;

  return (
    <div className="mx-auto max-w-lg min-h-screen bg-gray-50 p-4 flex flex-col">
      <header className="flex justify-between items-center py-4 mb-4 border-b">
        <h1 className="text-xl font-bold text-azul-oscuro">Añadir Reporte (1/3)</h1>
        <button onClick={() => navigate('/profile')} className="text-gray-500 hover:text-red-500">
          <XMarkIcon className="w-6 h-6" />
        </button>
      </header>
      
      <main className="flex-grow">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">1. Evidencia Fotográfica</h2>
        
        <FileUploader onFileSelect={handleFileSelect} />

        {photos.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {photos.map((url, index) => (
              <div key={index} className="relative w-full h-24 rounded-lg overflow-hidden shadow-md">
                <img src={url} alt={`Report Photo ${index + 1}`} className="w-full h-full object-cover" />
                <button 
                  onClick={() => handleRemovePhoto(url)}
                  className="absolute top-1 right-1 bg-red-600 rounded-full p-0.5 text-white hover:bg-red-700"
                >
                  <XMarkIcon className="w-3 h-3"  />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-8 p-4 bg-white rounded-xl shadow-sm border">
          <label htmlFor="blur-toggle" className="text-md font-medium text-gray-700">
            Aplicar Desenfoque (Blur)
          </label>
          <input
            type="checkbox"
            id="blur-toggle"
            checked={blurActive}
            onChange={(e) => setBlurActive(e.target.checked)}
            className="h-6 w-12 appearance-none rounded-full bg-gray-300 transition duration-200 ease-in-out checked:bg-verde-oscuro focus:outline-none focus:ring-2 focus:ring-verde-claro"
            style={{ position: 'relative', transition: 'background-color 0.2s, box-shadow 0.2s' }}
          />
        </div>

      </main>
      <footer className="py-4 border-t bg-gray-50">
        <button 
          onClick={handleContinue}
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

export default NewReportStep1;