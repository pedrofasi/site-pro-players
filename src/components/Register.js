// src/components/Register.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../styles/Register.css'; // Importe o CSS específico para Register

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Usuário criado com sucesso!');
        } catch (error) {
            console.error('Erro ao registrar: ', error);
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <h2>Registrar</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="btn-register" type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;