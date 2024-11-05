// src/components/ProPlayers.js
import React from 'react';

const proPlayers = [
    { id: 1, name: 'Pro Player 1' },
    { id: 2, name: 'Pro Player 2' },
    { id: 3, name: 'Pro Player 3' },
];

const ProPlayers = () => {
    return (
        <div>
            <h2>Pro Players</h2>
            <ul>
                {proPlayers.map(player => (
                    <li key={player.id}>
                        {player.name}
                        <button onClick={() => alert(`You chose to play against ${player.name}`)}>
                            Play
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProPlayers;