import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Map from '../components/Map'; 

const MapPage = () => {
<div className="w-full h-80 rounded-lg shadow-lg overflow-hidden">
</div>
    return (
        <MainLayout>
            <h1 className="text-2xl font-bold mb-4 text-azul-oscuro">Mapa de Reportes</h1>
            
            <div className="h-[calc(100vh-160px)] w-full"> 
                <Map 
                    position={[3.0, -76.0]}
                    zoom={10} 
                />
            </div>
            
        </MainLayout>
    );
};

export default MapPage;