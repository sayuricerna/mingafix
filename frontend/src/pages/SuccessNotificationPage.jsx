import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon, FireIcon } from '@heroicons/react/24/solid';
import Button from '../components/Button';

const SuccessNotificationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/profile');
    }, 5000000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-/10 text-center">
      
      <CheckCircleIcon className="w-24 h-24 text-verde-oscuro mb-6 " />
      
      <h1 className="text-2xl font-bold text-verde-oscuro mb-3">
        ¡Reporte Enviado con Éxito!
      </h1>
      
      <p className=" text-sm text-gray-600 mb-8 max-w-sm">
        Gracias por tu contribución. Tu reporte será revisado por las autoridades competentes.
      </p>

      <div className="p-6 bg-white rounded-xl border border-verde w-full max-w-sm transform scale-105 transition duration-300 mb-10">
        <FireIcon className="w-8 h-8 text-azul-claro mx-auto mb-2" />
        <p className="text-lg font-extrabold text-azul-oscuro">
          ¡Primera Contribución!
        </p>
        <p className="text-2xl font-Arial text-verde mt-3 ">
          +20 puntos
        </p>
      </div>

      <div className="w-full max-w-sm space-y-3">
        <Button onClick={() => navigate('/profile')} primary={true}>
          Volver al perfil
        </Button>
        <Button onClick={() => navigate('/map')} tertiary={true}>
          Ver el mapa
        </Button>
      </div>
    </div>
  );
};

export default SuccessNotificationPage;