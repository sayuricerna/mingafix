// import React from 'react';


// const Button = ({ children, primary = true, disabled = false, ...props }) => {
//   const baseClasses = primary 
//     ? 'bg-azul-oscuro hover:bg-azul-mas-oscuro' 
//     : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
//   const disabledClasses = 'bg-gray-400 cursor-not-allowed';

//   return (
//     <button
//       disabled={disabled}
//       className={`w-full p-4 text-white font-semibold rounded-lg 
//                   transition duration-150 ease-in-out shadow-md
//                   ${disabled ? disabledClasses : baseClasses}
//                   ${!disabled && primary ? 'text-white' : ''}
//                   ${!disabled && !primary ? 'text-gray-800' : ''}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

// src/components/Button.jsx
import React from 'react';

// Añadimos 'tertiary' a las props con un valor por defecto de false
const Button = ({ children, primary = true, tertiary = false, disabled = false, ...props }) => {
  let baseClasses;
  
  // 1. CLASES DESHABILITADAS (máxima prioridad)
  const disabledClasses = 'bg-gray-400 border border-gray-400 cursor-not-allowed text-white';

  // 2. DEFINICIÓN DE ESTILOS BASE
  if (tertiary) {
    // ESTILO TERCIARIO (El nuevo botón "Ver el mapa")
    baseClasses = 'bg-white border border-azul-oscuro text-azul-oscuro hover:bg-azul-claro/5';
  } else if (primary) {
    // ESTILO PRIMARIO (El botón "Enviar Reporte")
    baseClasses = 'bg-azul-oscuro hover:bg-azul-mas-oscuro text-white'; 
  } else {
    // ESTILO SECUNDARIO (El estilo gris original, si aún lo necesitas para algo)
    baseClasses = 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  }

  return (
    <button
      disabled={disabled}
      className={`w-full p-4 font-semibold rounded-lg 
                  transition duration-150 ease-in-out shadow-sm 
                  ${disabled ? disabledClasses : baseClasses}
                  `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;