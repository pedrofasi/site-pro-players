// src/components/Profile.js
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext'; // Altere a importação para usar o export padrão

const Profile = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <h1>Perfil</h1>
            {currentUser ? (
                <div>
                    <p>Email: {currentUser.email}</p>
                    {/* Adicione outras informações do usuário aqui */}
                </div>
            ) : (
                <p>No user logged in.</p>
            )}
        </div>
    );
};

export default Profile;