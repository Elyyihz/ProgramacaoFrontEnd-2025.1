"use client";

import { useState } from "react";

export default function Home() {
  const [valorDado1, setValorDado1] = useState(null);
  const [valorDado2, setValorDado2] = useState(null);
  const [rodada, setRodada] = useState(1);
  const [placar, setPlacar] = useState({ jogador1: 0, jogador2: 0 });
  const [vencedorRodada, setVencedorRodada] = useState("");
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const gerarNumeroAleatorio = (jogador) => {
    const novoValor = Math.floor(Math.random() * 6) + 1;

    if (jogador === 1) {
      setValorDado1(novoValor);
    } else {
      setValorDado2(novoValor);
    }

    if (valorDado1 !== null && valorDado2 !== null) {
      determinarVencedor(novoValor, jogador);
    }
  };

  const determinarVencedor = (novoValor, jogador) => {
    const dado1 = jogador === 1 ? novoValor : valorDado1;
    const dado2 = jogador === 2 ? novoValor : valorDado2;

    if (dado1 !== null && dado2 !== null) {
      let vencedor = "";

      if (dado1 > dado2) {
        vencedor = "Jogador 1 venceu!";
        setPlacar((prev) => ({ ...prev, jogador1: prev.jogador1 + 1 }));
      } else if (dado2 > dado1) {
        vencedor = "Jogador 2 venceu!";
        setPlacar((prev) => ({ ...prev, jogador2: prev.jogador2 + 1 }));
      } else {
        vencedor = "Empate!";
      }

      setVencedorRodada(vencedor);
      if (rodada < 5) {
        setRodada(rodada + 1);
        setValorDado1(null);
        setValorDado2(null);
      } else {
        setJogoFinalizado(true);
      }
    }
  };

  const resetarJogo = () => {
    setRodada(1);
    setPlacar({ jogador1: 0, jogador2: 0 });
    setVencedorRodada("");
    setJogoFinalizado(false);
    setValorDado1(null);
    setValorDado2(null);
  };

  const imagens = {
    1: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
    2: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
    3: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
    4: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
    5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
    6: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg",
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>{rodada}ª Rodada</h1>

      <div style={styles.jogadoresContainer}>
        <div style={styles.jogador}>
          <h2>Jogador 1</h2>
          {valorDado1 !== null && <img src={imagens[valorDado1]} style={styles.dadoImagem} />}
          <button onClick={() => gerarNumeroAleatorio(1)} style={styles.botao} disabled={valorDado1 !== null}>
            Rolar Dado
          </button>
        </div>

        <div style={styles.jogador}>
          <h2>Jogador 2</h2>
          {valorDado2 !== null && <img src={imagens[valorDado2]} style={styles.dadoImagem} />}
          <button onClick={() => gerarNumeroAleatorio(2)} style={styles.botao} disabled={valorDado2 !== null}>
            Rolar Dado
          </button>
        </div>
      </div>

      <h2 style={styles.placar}>
        Placar: {placar.jogador1} x {placar.jogador2}
      </h2>
      {vencedorRodada && <h3>{vencedorRodada}</h3>}

      {jogoFinalizado && (
        <div>
          <h2>
            {placar.jogador1 > placar.jogador2
              ? "Jogador 1 venceu o jogo!"
              : placar.jogador2 > placar.jogador1
              ? "Jogador 2 venceu o jogo!"
              : "O jogo terminou em empate!"}
          </h2>
          <button onClick={resetarJogo} style={styles.botao}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  titulo: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  jogadoresContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
  },
  jogador: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dadoImagem: {
    width: "100px",
    height: "100px",
  },
  botao: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    disabled: {
      backgroundColor: "#ccc",
    },
  },
  placar: {
    marginTop: "20px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
};