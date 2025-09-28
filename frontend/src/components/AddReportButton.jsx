import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'; 

const AddReportButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-24 right-6 bg-azul-oscuro hover:bg-azul-mas-oscuro text-white p-4 rounded-full shadow-lg transition duration-150"
            aria-label="Añadir Reporte"
        >       
            <PlusIcon className="w-6 h-6" />
        </button>
    );
}
export default AddReportButton;