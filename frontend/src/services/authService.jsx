import axios from 'axios';

const API_BASE_URL = 'http://192.168.100.196:8000/api/auth'; 

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, { email, password });
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register/`, userData);
    return response.data; 
  } catch (error) {
    throw error;
  }
};