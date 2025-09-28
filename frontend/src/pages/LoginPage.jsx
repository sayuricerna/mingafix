import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/profile'); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <img 
        src="../src/assets/mingafixLogo.jpg" 
        alt="Mingafix Logo" 
        className="w-24 h-24 mb-10 rounded-full"
      />
      
      <h1 className="text-3xl font-bold mb-8 text-azul-oscuro">Mingafix</h1>

      <form onSubmit={handleLogin} className="w-full max-w-sm">
        
        <input 
          type="email" 
          placeholder="Email"
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-azul-claro transition duration-150"
        />
        
        <input 
          type="password" 
          placeholder="Contraseña"
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:border-azul-claro transition duration-150"
        />
        
        <button 
          type="submit"
          className="w-full p-4 bg-azul-oscuro text-white font-semibold rounded-lg hover:bg-azul-mas-oscuro transition duration-150"
        >
          Ingresar
        </button>
      </form>

      <div className="flex justify-center w-full mt-4 space-x-4">
        <button 
          onClick={() => navigate('/register')}
          className="text-azul-oscuro hover:text-azul-claro text-sm font-medium"
        >
          Registrarse
        </button>
        <span className="text-gray-400">|</span>
        <button 
          className="text-gray-500 hover:text-azul-claro text-sm"
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>

    </div>
  );
};

export default LoginPage;