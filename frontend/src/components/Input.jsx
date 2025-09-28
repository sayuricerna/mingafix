import React from 'react';

const Input = ({ label, type = 'text', placeholder, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-4 border border-gray-300 rounded-lg 
                   focus:outline-none focus:border-azul-claro focus:ring-1 focus:ring-azul-claro
                   transition duration-150 text-gray-800"
        {...props}
      />
    </div>
  );
};

export default Input;