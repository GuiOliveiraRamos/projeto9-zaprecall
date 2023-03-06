import "./css/reset.css";
import logo from "./assets/logo.png";
import Perguntas from "./Perguntas";
import styled from "styled-components";

function App() {
  return (
    <>
      <Appstyled>
        <Titulo>
          <img src={logo} alt={logo}></img>
          <h1>ZapRecall</h1>
        </Titulo>
        <Perguntas />
      </Appstyled>
      <Footer>
        <p>0/4 CONCLUÍDOS</p>
      </Footer>
    </>
  );
}

export default App;

const Appstyled = styled.div`
  width: 375px;
  height: 1000px;
  background-color: #fb6b6b;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 42px;
`;

const Titulo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 51px;

  h1 {
    font-family: "righteous";
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
  }
  img {
    width: 52px;
    height: 60px;
    padding-right: 20px;
  }
`;

const Footer = styled.div`
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
