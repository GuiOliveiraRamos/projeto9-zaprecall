import { useState } from "react";
import styled from "styled-components";
import seta_play from "./assets/seta_play.png";
import cards from "./cards";
import seta_virar from "./assets/seta_virar.png";
import icone_erro from "./assets/icone_erro.png";
import icone_quase from "./assets/icone_quase.png";
import icone_certo from "./assets/icone_certo.png";

export default function Perguntas() {
  const arrayPerguntas = [
    {
      id: 1,
      texto: "Pergunta 1",
      img: seta_play,
      imgErro: icone_erro,
      imgQuase: icone_quase,
      imgCerto: icone_certo,
      cor: null,
      corErro: "#FF3030",
      corQuase: "#FF922E",
      corCerto: "#2FBE34"
    },
    {
      id: 2,
      texto: "Pergunta 2",
      img: seta_play,
      imgErro: icone_erro,
      imgQuase: icone_quase,
      imgCerto: icone_certo,
      cor: null,
      corErro: "#FF3030",
      corQuase: "#FF922E",
      corCerto: "#2FBE34"
    },
    {
      id: 3,
      texto: "Pergunta 3",
      img: seta_play,
      imgErro: icone_erro,
      imgQuase: icone_quase,
      imgCerto: icone_certo,
      cor: null,
      corErro: "#FF3030",
      corQuase: "#FF922E",
      corCerto: "#2FBE34"
    },
    {
      id: 4,
      texto: "Pergunta 4",
      img: seta_play,
      imgErro: icone_erro,
      imgQuase: icone_quase,
      imgCerto: icone_certo,
      cor: null,
      corErro: "#FF3030",
      corQuase: "#FF922E",
      corCerto: "#2FBE34"
    },
    {
      id: 5,
      texto: "Pergunta 5",
      img: seta_play,
      imgErro: icone_erro,
      imgQuase: icone_quase,
      imgCerto: icone_certo,
      cor: null,
      corErro: "#FF3030",
      corQuase: "#FF922E",
      corCerto: "#2FBE34"
    },
    {
      id: 6,
      texto: "Pergunta 6",
      img: seta_play,
      imgErro: icone_erro,
      imgQuase: icone_quase,
      imgCerto: icone_certo,
      cor: null,
      corErro: "#FF3030",
      corQuase: "#FF922E",
      corCerto: "#2FBE34"
    },
    {
      id: 7,
      texto: "Pergunta 7",
      img: seta_play,
      imgErro: icone_erro,
      imgQuase: icone_quase,
      imgCerto: icone_certo,
      cor: null,
      corErro: "#FF3030",
      corQuase: "#FF922E",
      corCerto: "#2FBE34"
    },
    {
      id: 8,
      texto: "Pergunta 8",
      img: seta_play,
      imgErro: icone_erro,
      imgQuase: icone_quase,
      imgCerto: icone_certo,
      cor: null,
      corErro: "#FF3030",
      corQuase: "#FF922E",
      corCerto: "#2FBE34"
    },
  ];

  const [virarPergunta, setVirarPergunta] = useState(false);
  const [segundoCard, setSegundoCard] = useState(null);
  const [perguntaSelecionada, setPerguntaSelecionada] = useState(null);
  const [terceiroCard, setTerceiroCard] = useState(null);
  const [resposta, setResposta] = useState(false);
  const [contador, setContador] = useState(0);
  const [cores, setCores] = useState({
    0: { cor: null, icone: seta_play },
    1: { cor: null, icone: seta_play },
    2: { cor: null, icone: seta_play },
    3: { cor: null, icone: seta_play },
    4: { cor: null, icone: seta_play },
    5: { cor: null, icone: seta_play },
    6: { cor: null, icone: seta_play },
    7: { cor: null, icone: seta_play },
  });

  const mostrarPergunta = (index) => {
    setSegundoCard(cards[index]);
    setVirarPergunta(!virarPergunta);
    setPerguntaSelecionada(index);
    setResposta(false);
    setCores((c) => ({
      ...c,
      [index]: "#ffffff",
    }));
  };

  const mostrarResposta = () => {
    setTerceiroCard(cards[perguntaSelecionada]);
    setResposta(true);
    setCores((c) => ({
      ...c,
      [perguntaSelecionada]: { cor: arrayPerguntas[perguntaSelecionada].cor, icone: arrayPerguntas[perguntaSelecionada].img },
    }));
  };

  const armazenarCor = (cor, icone) => {
    setVirarPergunta(false);
    setCores((c) => ({
      ...c,
      [perguntaSelecionada]: { cor: cor, icone: icone },
    }));
    setContador(contador + 1);
  };

  return (
    <>
      <ul>
        {arrayPerguntas.map((question, index) =>
          virarPergunta && perguntaSelecionada === index ? (
            resposta ? (
              <Conteudo data-test="flashcard" key={question.id}>
                <p data-test="flashcard-text">{terceiroCard.answer}</p>
                <Botoes>
                  <Button1
                    data-test="no-btn"
                    style={{ color: cores[index].cor }}
                    onClick={() => armazenarCor(arrayPerguntas[perguntaSelecionada].corErro, arrayPerguntas[perguntaSelecionada].imgErro)}
                  >
                    Não lembrei
                  </Button1>
                  <Button2
                    data-test="partial-btn"
                    style={{ color: cores[index].cor }}
                    onClick={() => armazenarCor(arrayPerguntas[perguntaSelecionada].corQuase,arrayPerguntas[perguntaSelecionada].imgQuase)}
                  >
                    Quase não lembrei
                  </Button2>
                  <Button3
                    data-test="zap-btn"
                    style={{ color: cores[index].cor }}
                    onClick={() => armazenarCor(arrayPerguntas[perguntaSelecionada].corCerto, arrayPerguntas[perguntaSelecionada].imgCerto)}
                  >
                    Zap!
                  </Button3>
                </Botoes>
              </Conteudo>
            ) : (
              <Conteudo data-test="flashcard" key={question.id}>
                <p data-test="flashcard-text">{segundoCard.question}</p>
                <img
                  data-test="turn-btn"
                  onClick={() => mostrarResposta()}
                  src={seta_virar}
                  alt={seta_virar}
                />
              </Conteudo>
            )
          ) : (
            <Pergunta
              data-test="flashcard"
              style={{ color: cores[index].cor }}
              key={question.id}
            >
              <p data-test="flashcard-text">{question.texto}</p>
              <img
                data-test="play-btn"
                onClick={() => mostrarPergunta(index)}
                src={cores[index].icone}
                alt={cores[index].icone}
              />
            </Pergunta>
          )
        )}
      </ul>
      <Rodape data-test="footer" contador={contador}>
        <p data-test="footer">{contador}/8 CONCLUÍDOS</p>
      </Rodape>
    </>
  );
}

const Pergunta = styled.li`
  width: 300px;
  height: 65px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px 0 15px;
  margin-bottom: 25px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

  p {
    font-family: "Recursive";
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;

const Conteudo = styled.div`
  width: 299px;
  height: 131px;
  border-radius: 5px;
  background-color: #ffffd4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 25px;
  padding: 18px 22px 0 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }

  img {
    height: 20px;
    width: 30px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  button {
    border: none;
    border-radius: 5px;
    width: 85px;
    height: 37px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: white;
  }
`;

const Botoes = styled.div`
  width: 271px;
  margin-left: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button1 = styled.button`
  background-color: #ff3030;
`;

const Button2 = styled.button`
  background-color: #ff922e;
`;

const Button3 = styled.button`
  background-color: #2fbe34;
`;

const Rodape = styled.div`
  width: 375px;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

  p {
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;
