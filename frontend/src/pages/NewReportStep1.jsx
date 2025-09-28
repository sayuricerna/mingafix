// src/pages/NewReportStep1.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon, CameraIcon } from '@heroicons/react/24/solid';
// import { useReport } from '../context/ReportContext'; // Lo usaremos más adelante

const NewReportStep1 = () => {
  const navigate = useNavigate();
  // const { updateReportData } = useReport(); // Lógica de contexto, la incluiremos después
  
  // photos guarda la URL de la foto tomada
  const [photos, setPhotos] = useState([]); 
  const [blurActive, setBlurActive] = useState(false); // Estado del toggle de desenfoque

  const handlePhotoCapture = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 1. Limpia la foto anterior si existe (solo permitimos una)
      if (photos.length > 0) {
        URL.revokeObjectURL(photos[0]); 
      }
      
      // 2. Crea y guarda la URL para la previsualización local
      const url = URL.createObjectURL(file);
      setPhotos([url]); 
      
      // 3. INTEGRACIÓN CON CONTEXTO: 
      // Aquí enviarías el objeto File real al contexto/estado global
      // updateReportData({ file: file, url: url }); 
    }
  };

  const handleRemovePhoto = () => {
    if (photos.length > 0) {
        URL.revokeObjectURL(photos[0]);
    }
    setPhotos([]);
  };

  const handleContinue = () => {
    if (photos.length > 0) {
      // Aquí guardarías el estado del blur en el contexto antes de navegar
      // updateReportData({ blurActive }); 
      navigate('/report/step2'); // Avanza al siguiente paso
    }
  };
  
  const isDisabled = photos.length === 0;

  return (
    <div className="mx-auto max-w-lg min-h-screen bg-gray-50 flex flex-col">
      <header className="flex justify-between items-center py-4 px-4 mb-4 border-b bg-white shadow-sm">
        <h1 className="text-xl font-bold text-azul-oscuro">Añadir Reporte (1/3)</h1>
        <button onClick={() => navigate('/profile')} className="text-gray-500 hover:text-red-500">
          <XMarkIcon className="w-6 h-6" />
        </button>
      </header>
      
      <main className="flex-grow p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">1. Evidencia Fotográfica</h2>
        
        {/* ======================================================================= */}
        {/* CONTENEDOR DE CÁMARA O PREVISUALIZACIÓN */}
        {/* ======================================================================= */}
        <div className="relative h-64 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center overflow-hidden mb-6">
          
          {photos.length > 0 ? (
            // Contenido cuando hay una foto (Previsualización y Botones)
            <>
              <img src={photos[0]} alt="Foto del Reporte" className="w-full h-full object-cover" />
              
              {/* Botón para tomar otra foto / eliminar */}
              <button 
                 onClick={handleRemovePhoto}
                 className="absolute top-2 right-2 bg-red-600 rounded-full p-2 text-white shadow-lg z-10 hover:bg-red-700 flex items-center space-x-1"
              >
                  <XMarkIcon className="w-4 h-4" />
              </button>
              
              {/* Botón para tomar otra foto (Abre el input) */}
              <label htmlFor="camera-input" 
                className="absolute bottom-0 right-0 m-3 bg-azul-oscuro rounded-full p-3 text-white shadow-xl hover:bg-azul-mas-oscuro cursor-pointer transition duration-150">
                <CameraIcon className="w-5 h-5" />
              </label>
            </>
          ) : (
            // Contenido cuando NO hay foto (Instrucciones para abrir la cámara)
            <label htmlFor="camera-input" className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition duration-150">
              <CameraIcon className="w-12 h-12 text-gray-500" />
              <span className="text-gray-600 mt-2 font-medium">Abrir Cámara para Tomar Foto</span>
            </label>
          )}

          {/* INPUT DE CÁMARA OCULTO (EL TRUCO: 'capture="environment"') */}
          <input
  type="file"
  accept="image/*"          capture="environment"     onChange={handlePhotoCapture}
  className="hidden" 
  id="camera-input" 
/> 
        </div>
        
        <p className="text-sm text-gray-500 mb-8">
          *Nota: Solo se permite tomar la foto en el momento para asegurar la validez de la evidencia.
        </p>

        {/* ======================================================================= */}
        {/* LÓGICA DE DESENFOQUE (BLUR) */}
        {/* ======================================================================= */}
        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border">
          <label htmlFor="blur-toggle" className="text-md font-medium text-gray-700">
            Aplicar Desenfoque (Blur)
            <p className="text-xs text-gray-500 mt-1">Desenfoque automático de rostros para proteger la privacidad.</p>
          </label>
          
          <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                id="blur-toggle"
                checked={blurActive}
                onChange={(e) => setBlurActive(e.target.checked)}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                // Tailwind solo puede estilizar clases predefinidas, para este toggle se necesita CSS personalizado en index.css
                // Por ahora, usaremos clases que simulan el toggle (aunque en CSS puro sería mejor)
              />
              <label 
                  htmlFor="blur-toggle" 
                  className={`block overflow-hidden h-6 rounded-full cursor-pointer transition duration-200 ease-in 
                  ${blurActive ? 'bg-verde-oscuro' : 'bg-gray-300'}`}
              ></label>
          </div>

        </div>

        {/* NOTA: Para el toggle de CSS puro (checkbox), generalmente se requieren estilos CSS adicionales en index.css */}
        
      </main>

      <footer className="py-4 px-4 border-t bg-gray-50">
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