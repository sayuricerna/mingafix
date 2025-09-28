// src/pages/NewReportStep3.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReport } from '../context/ReportContext';
import Button from '../components/Button';
import Input from '../components/Input';
import { XMarkIcon, MapPinIcon } from '@heroicons/react/24/solid';

const NewReportStep3 = () => {
  const navigate = useNavigate();
  const { reportData, updateReportData, clearReport } = useReport();
  const locationText = reportData.location?.address || "Ubicación no capturada";

  const handleSubmit = () => {    
    clearReport();
    navigate('/report/success'); 
  };

  return (
    <div className="mx-auto max-w-lg min-h-screen bg-gray-50 p-4 flex flex-col">
      <header className="flex justify-between items-center py-4 mb-4 border-b">
        <h1 className="text-xl font-bold text-azul-oscuro">Añadir Reporte (3/3)</h1>
        <button onClick={() => navigate('/profile')} className="text-gray-500 hover:text-red-500">
          <XMarkIcon className="w-6 h-6" />
        </button>
      </header>
      
      <main className="flex-grow">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Resumen y Detalles</h2>

        <div className="mb-6">
          <p className="font-medium text-gray-800 mb-2">Fotos ({reportData.photos.length}):</p>
          <div className="grid grid-cols-3 gap-2">
            {reportData.photos.slice(0, 3).map((url, index) => (
              <img key={index} src={url} alt={`Foto ${index}`} className="w-full h-20 object-cover rounded-lg shadow-sm" />
            ))}
          </div>
        </div>
        
        <div className="mb-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
                <MapPinIcon className="w-5 h-5 text-azul mr-2" />
                <p className="font-medium text-gray-800">Ubicación: <span className="text-sm text-gray-600">{locationText}</span></p>
            </div>
            <p className="font-medium text-gray-800">Categoría: <span className="text-sm text-verde-oscuro font-bold">{reportData.category || 'No seleccionada'}</span></p>
            <p className="text-xs text-gray-500 mt-2">Desenfoque aplicado: {reportData.blurActive ? 'Sí' : 'No'}</p>
        </div>

        <Input 
          label="Descripción Adicional (opcional)" 
          placeholder="Escribe más detalles aquí..."
          value={reportData.description}
          onChange={(e) => updateReportData({ description: e.target.value })}
        />
        
      </main>

      <footer className="py-4 border-t bg-gray-50">
        <Button onClick={handleSubmit} primary={true}>
          Enviar Reporte
        </Button>
      </footer>
    </div>
  );
};

export default NewReportStep3;