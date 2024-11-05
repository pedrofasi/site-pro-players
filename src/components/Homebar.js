// src/components/Homebar.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FaBars } from 'react-icons/fa'; // Ícone de menu
import { auth } from '../firebase'; // Certifique-se de que está importando o Firebase Auth corretamente
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirecionamento

const Homebar = () => {
    const { currentUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Usar o hook para navegação

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        try {
            await auth.signOut(); // Lógica de logout
            navigate('/'); // Redirecionar para a página inicial após o logout
        } catch (error) {
            console.error("Erro ao fazer logout: ", error);
        }
    };

    return (
        <div className="homebar">
            {currentUser && (
                <>
                    <button onClick={handleToggle} className="menu-button">
                        <FaBars /> {/* Ícone do botão */}
                    </button>
                    {isOpen && (
                        <ul>
                            <li><a href="/profile">Perfil</a></li>
                            <li><a href="/pro-players">ProPlayers</a></li>
                            <li><a href="/settings">Configurações</a></li>
                            <li onClick={handleLogout}>Sair</li>
                        </ul>
                    )}
                </>
            )}
        </div>
    );
};

export default Homebar;