import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; 

const useAuth = () => {
  const [user, setUser] = useState(null); // null si no está logueado
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (email === "test@minga.com" && password === "1234") {
        setUser({ id: 1, name: "Sayuri Cerna", email });
        localStorage.setItem('user', JSON.stringify({ name: "Sayuri Cerna" }));
      } else {
        throw new Error("Credenciales inválidas.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, isLoading, error, login, logout };
};

export default useAuth;