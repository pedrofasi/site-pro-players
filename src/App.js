// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ProPlayers from './components/ProPlayers';
import ForgotPassword from './components/ForgotPassword';
import { useAuth } from './context/AuthContext';
import { auth } from './firebase';
import './styles/Navbar.css';
import './styles/Sidebar.css';

const App = () => {
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = '/';
    } catch (error) {
      console.error("Erro ao fazer logout: ", error);
    }
  };

  return (
    <Router>
      <div>
        {/* Navbar no topo */}
        <nav className="navbar">
          <Link to="/" className="nav-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCnsizMKQJVOIKsOvAL8eL8kDnHD8sQV3mA&s" alt="Home" className="home-icon" />
          </Link>
          <div className="nav-links">
            {!currentUser ? (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Registrar</Link>
              </>
            ) : (
              <Link to="/profile">Perfil</Link>
            )}
          </div>
        </nav>

        {/* Sidebar à esquerda */}
        {currentUser && (
          <div className="sidebar">
            <ul>
              <li><Link to="/profile">Perfil</Link></li>
              <li><Link to="/history">Histórico</Link></li>
              <li><Link to="/pedidos">Pedidos</Link></li>
              <li><Link to="/settings">Configurações</Link></li>
              <li onClick={handleLogout}><Link to="#">Sair</Link></li>
            </ul>
          </div>
        )}

        {/* Área principal de conteúdo, abaixo da navbar e ao lado da sidebar */}
        <div style={{ marginTop: '60px', paddingLeft: currentUser ? '220px' : '0', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pro-players" element={<ProPlayers />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;