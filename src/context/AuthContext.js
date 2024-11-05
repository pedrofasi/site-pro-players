// src/context/AuthContext.js
import React, { createContext, useEffect, useState, useContext } from 'react';
import { auth } from '../firebase'; // Certifique-se de que está importando corretamente

// Criação do contexto
const AuthContext = createContext();

// Criação do provedor de autenticação
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Criação do hook para usar o contexto
export const useAuth = () => {
    return useContext(AuthContext);
};

// Exportação do AuthContext
export default AuthContext;