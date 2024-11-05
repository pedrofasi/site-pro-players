// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { auth } from '../firebase'; // Importa o objeto auth
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('E-mail de redefinição de senha enviado com sucesso!');
            setError('');
        } catch (err) {
            setError('Erro ao enviar o e-mail: ' + err.message);
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Recuperar Senha</h2>
            <form onSubmit={handleResetPassword}>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Enviar e-mail de redefinição de senha</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ForgotPassword;