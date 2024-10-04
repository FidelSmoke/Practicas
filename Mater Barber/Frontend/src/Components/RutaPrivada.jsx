// VerificarToken.js
import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import jwtDecode from 'jwt-decode';
import { createContext } from 'react';
import axios from 'axios';

const VerificarToken = () => {
    const { usuario } = useAuth();

    useEffect(() => {
        // Aquí podrías hacer una verificación adicional si es necesario
    }, [usuario]);

    if (!usuario) {
        return <p>No tienes acceso a esta sección. Por favor inicia sesión.</p>;
    }

    return (
        <div>
            <h1>Bienvenido, {usuario.nombre_usuario}</h1>
            <p>Email: {usuario.email}</p>
            {/* Otra información del usuario */}
        </div>
    );
};


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            verificarToken(token);
        }
    }, [token]);

    const login = async (email, password) => {
        const response = await axios.post('/login', { email, password });
        setToken(response.data.token);
        setUsuario(response.data.user);
        localStorage.setItem('token', response.data.token);
    };

    const logout = () => {
        setToken(null);
        setUsuario(null);
        localStorage.removeItem('token');
    };

    const verificarToken = async (token) => {
        try {
            const response = await axios.get('/verificar-token', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsuario(response.data.usuario);
        } catch (err) {
            console.error("Token no válido o expirado", err);
            logout(); // Cerrar sesión si el token no es válido
        }
    };

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default VerificarToken;
