import { useState } from 'react';
import { login as loginService,register as registerService } from '../services/authService';

const getInitialState = () => {
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  return {
    user: user ? JSON.parse(user) : null,
    token: token || null,
  };
};

const useAuth = () => {
  const initialState = getInitialState();
  const [user, setUser] = useState(initialState.user);
  const [token, setToken] = useState(initialState.token);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loginService(email, password);
      
      const { token: receivedToken, ...userData } = data; // Separamos el token
      setToken(receivedToken);
      setUser(userData);
      localStorage.setItem('token', receivedToken);
      localStorage.setItem('user', JSON.stringify(userData));

      return true;

    } catch (err) {
      const errorMessage = err.response?.data?.detail || 
                           err.message || 
                           "Error de red o credenciales incorrectas.";
      setError(errorMessage);
      throw new Error(errorMessage); 
    } finally {
      setLoading(false);
    }
  };
    
  const register = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const data = await registerService(formData);
      const { token: receivedToken, ...userData } = data; 
      
      if (receivedToken) {
          setToken(receivedToken);
          setUser(userData);
          localStorage.setItem('token', receivedToken);
          localStorage.setItem('user', JSON.stringify(userData));
      }

      return true;

    } catch (err) {
      const errorData = err.response?.data;
      
     let errorMessage = "Error en el registro.";
      
      if (errorData) {
          errorMessage = Object.values(errorData).flat().join(' | ') || errorMessage;
      }
      
      setError(errorMessage);
      throw new Error(errorMessage); 
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return {
    user,
    token,
    isAuthenticated: !!token,
    loading,
    error,
    login,
    logout,
    setError,

  };
};

export default useAuth;