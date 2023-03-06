import "./css/reset.css";
import logo from "./assets/logo.png";
import Perguntas from "./Perguntas";
import styled from "styled-components";

function App() {
  return (
    <>
      <Appstyled>
        <Header>
          <img src={logo} alt={logo}></img>
          <h1>ZapRecall</h1>
        </Header>
        <Perguntas />
      </Appstyled>
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

const Header = styled.div`
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

