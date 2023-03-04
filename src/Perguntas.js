import { useState } from "react"
import styled from "styled-components"
import seta_play from "./assets/seta_play.png"
import cards from "./cards"
import seta_virar from "./assets/seta_virar.png"

export default function Perguntas() {

  const arrayPerguntas = [
    { id: 1, texto: 'Pergunta 1' },
    { id: 2, texto: 'Pergunta 2' },
    { id: 3, texto: 'Pergunta 3' },
    { id: 4, texto: 'Pergunta 4' },
  ]

  const [virarPergunta, setVirarPergunta] = useState(false)
  const [segundoCard, setSegundoCard] = useState(null)
  const [perguntaSelecionada, setPerguntaSelecionada] = useState(null)

  const showQuestion = (index) => {

    setSegundoCard(cards[index])
    setVirarPergunta(!virarPergunta)
    setPerguntaSelecionada(index)

  }

  return (
    <ul>
 {arrayPerguntas.map((question, index) =>
        virarPergunta && perguntaSelecionada === index ? (
          <Conteudo key={question.id}>
            <p>{segundoCard.question}</p>
            <img src={seta_virar} alt={seta_virar} />
          </Conteudo>
        ) : (
          <Pergunta
            onClick={() => showQuestion(index)}
            key={question.id}
          >
            <p>{question.texto}</p>
            <img src={seta_play} alt={seta_play} />
          </Pergunta>
        )
      )}
    </ul>
  )
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
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
`

const Conteudo = styled.div`
width:299px ;
height:131px ;
border-radius: 5px;
background-color: #FFFFD4;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
padding:10px;
display:flex ;
justify-content:space-between ;
flex-wrap:wrap;
position:relative ;

p{
  font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
}

img{
height:20px ;
width:30px ;
position:absolute ;
right:10px ;
bottom: 10px;
}

`