import styled from "styled-components"
import seta_play from "./assets/seta_play.png"

export default function Perguntas() {

  const arrayPerguntas = [
    { id: 1, texto: 'Pergunta 1' },
    { id: 2, texto: 'Pergunta 2' },
    { id: 3, texto: 'Pergunta 3' },
    { id: 4, texto: 'Pergunta 4' },
      ]

  return (
    <ul>
      {arrayPerguntas.map((question) => (
        <Pergunta key={question.id}>
          <p>{question.texto}</p>
          <img src={seta_play} alt={seta_play} />
        </Pergunta>
      ))}
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

