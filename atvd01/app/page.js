"use client";

import { useState } from 'react';

export default function Home() {
  const [valorDado, setValorDado] = useState(1);

  const gerarNumeroAleatorio = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(novoValor);
  };

  const imagens = {
    1: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg',
    2: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg',
    3: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg',
    4: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg',
    5: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg',
    6: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg',
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Jogo de Dados</h1>
      <div style={styles.dadoContainer}>
        <img
          src={imagens[valorDado]}
          alt={`Dado mostrando o valor ${valorDado}`}
          style={styles.dadoImagem}
        />
      </div>
      <button onClick={gerarNumeroAleatorio} style={styles.botao}>
        Jogar Dado
      </button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f0f0f0', 
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  titulo: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  dadoContainer: {
    backgroundColor: '#ffffff', 
    borderRadius: '10px', 
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dadoImagem: {
    width: '100px',
    height: '100px',
  },
  botao: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};