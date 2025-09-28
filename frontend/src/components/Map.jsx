// src/components/Map.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Se necesitan los estilos de Leaflet
import L from "leaflet";
// Importar el ícono por defecto (soluciona un problema común de Webpack)
import markerIconPng from "leaflet/dist/images/marker-icon.png"; 

// --- Configuración del Ícono de Marcador (Fuera del Componente) ---
// Se hace fuera para evitar que se recree en cada render.
const customMarkerIcon = new L.Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

/**
 * Componente de Mapa reutilizable.
 * @param {Array} position - Coordenadas [lat, lng] del centro del mapa y del marcador.
 * @param {number} zoom - Nivel de zoom inicial.
 * @param {string} popupText - Texto a mostrar en el popup del marcador.
 */
const Map = ({ position = [0.0, 0.0], zoom = 13, popupText = "Ubicación del Reporte" }) => {
    

    return (
        <MapContainer 
            center={position} 
            zoom={zoom} 
            // Estilo por defecto, puede ser sobrescrito por un className del padre
            style={{ height: "100%", width: "100%" }} 
            scrollWheelZoom={false} // Deshabilita el zoom con la rueda del ratón
        >
            <TileLayer  
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />  
            <Marker position={position} icon={customMarkerIcon}>
                <Popup>
                    {popupText}
                </Popup>
            </Marker>
        </MapContainer>
    );
}  

export default Map;