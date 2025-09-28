import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Input from '../components/Input';    
import Button from '../components/Button';  

const RegisterPage = () => {
    const navigate = useNavigate();
    const { register, loading, error, setError } = useAuth(); 

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        
        try {

            await register(formData);
            
            navigate('/profile'); 

        } catch (err) {
            console.error("Error al registrar:", err.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
            
            <h1 className="text-3xl font-bold mb-8 text-azul-oscuro">Registrar</h1>

            <form onSubmit={handleRegister} className="w-full max-w-sm">
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-sm" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                <Input name="first_name" label="Nombre" type="text" placeholder="Tu nombre" value={formData.first_name} onChange={handleChange} required />
                <Input name="last_name" label="Apellido" type="text" placeholder="Tu apellido" value={formData.last_name} onChange={handleChange} required />
                <Input name="email" label="Email" type="email" placeholder="email@ejemplo.com" value={formData.email} onChange={handleChange} required />
                <Input name="password" label="Contraseña" type="password" placeholder="Mínimo 8 caracteres" value={formData.password} onChange={handleChange} required /> 
                
                <Button type="submit" primary={true} disabled={loading}>
                    {loading ? 'Registrando...' : 'Crear Cuenta'}
                </Button>
            </form>

            <button 
                onClick={() => navigate('/login')}
                className="mt-4 text-azul-oscuro hover:text-azul-claro text-sm font-medium"
            >
                ¿Ya tienes una cuenta? Inicia Sesión
            </button>
        </div>
    );
};

export default RegisterPage;