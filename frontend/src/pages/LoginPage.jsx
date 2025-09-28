// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading, error, setError } = useAuth(); 
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
      await login(formData.email, formData.password);
      navigate('/profile'); 

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        {/* ... Logo ... */}
        <img 
        src="../src/assets/mingafixLogo.jpg" 
        alt="Mingafix Logo" 
        className="w-24 h-24 mb-10 rounded-full"
      />
      
      <h1 className="text-3xl font-bold mb-8 text-azul-oscuro">Mingafix</h1>

      <form onSubmit={handleLogin} className="w-full max-w-sm">
        
        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-sm" role="alert">
                <span className="block sm:inline">{error}</span>
            </div>
        )}
        
        {/* === INPUT EMAIL === */}
        <input 
          type="email" 
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-azul-claro transition duration-150"
        />
        
        {/* === INPUT CONTRASEÑA === */}
        <input 
          type="password" 
          placeholder="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:border-azul-claro transition duration-150"
        />
        
        <button 
          type="submit"
          disabled={loading}
          className={`w-full p-4 text-white font-semibold rounded-lg transition duration-150 shadow-md 
            ${loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-azul-oscuro hover:bg-azul-mas-oscuro'
            }`}
        >
          {loading ? 'Validando...' : 'Ingresar'}
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