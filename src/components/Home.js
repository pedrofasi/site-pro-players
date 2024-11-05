// src/components/Home.js
import React from 'react';
import '../styles/Home.css'; // Adicione um CSS específico para estilizar essa página

const games = [
    { name: 'Rocket League', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/640px-Rocket_League_coverart.jpg' },
    { name: 'League of Legends', imageUrl: 'https://pentagram-production.imgix.net/cc7fa9e7-bf44-4438-a132-6df2b9664660/EMO_LOL_02.jpg?rect=0%2C0%2C1440%2C1512&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=672' },
    { name: 'Valorant', imageUrl: 'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png' },
    { name: 'Fortnite', imageUrl: 'https://static.cdnlogo.com/logos/f/35/fortnite.png' },
    { name: 'Dota 2', imageUrl: 'https://1000logos.net/wp-content/uploads/2019/03/Dota-2-Logo.png' },
    { name: 'Overwatch', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Overwatch_2_logo.svg/512px-Overwatch_2_logo.svg.png' },
    // Adicione mais jogos conforme necessário
];

const Home = () => {
    return (
        <div className="home-container">
            <section className="game-list">
                {games.map((game, index) => (
                    <div key={index} className="game-item">
                        <img src={game.imageUrl} alt={game.name} className="game-image" />
                        <h3>{game.name}</h3>
                    </div>
                ))}
            </section>

            <section className="about-site">
                <h2>Sobre o Site</h2>
                <p>
                    Bem-vindo à nossa plataforma! Aqui você pode jogar com pro players em jogos de alta popularidade.
                    Basta escolher seu jogo favorito, selecionar um pro player e agendar a partida. Acompanhe nossos
                    rankings e desafie seus limites com os melhores!
                </p>
            </section>
        </div>
    );
};

export default Home;