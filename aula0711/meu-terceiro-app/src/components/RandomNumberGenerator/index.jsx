import React, { useState } from 'react';
import './style.css'


function RandomNumberGenerator() {
    const [numero, setNumero] = useState(0);
    const gerarNumeroAleatorio = () => {
        const novoNumero = Math.floor(Math.random() * 100) + 1;
        setNumero(novoNumero);
    }
    return(
        <div className="random-container">
            <h2>Número Aleatório </h2>
            <h1>{numero}</h1>
            <button onClick={gerarNumeroAleatorio}>Gerar Número</button>
        </div>
    );
}
export default RandomNumberGenerator;
