import styled from "styled-components"
import seta_play from "./assets/seta_play.png"

export default function Perguntas() {
    return (
      <ul>
        <Pergunta>
          <p>Pergunta 1</p>
          <img src={seta_play} alt={seta_play}/>
        </Pergunta>
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

