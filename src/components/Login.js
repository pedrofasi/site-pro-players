// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom'; // Importe o Link
import '../styles/Login.css'; // Importe o CSS específico para Login

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao fazer login: ', error);
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button className="btn-login" type="submit">Entrar</button>
            </form>
            <div className="forgot-password">
                <Link to="/forgot-password">Esqueceu sua senha?</Link>
            </div>
        </div>
    );
};

export default Login;