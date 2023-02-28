import "./css/reset.css"
import "./css/style.css"
import logo from "./assets/logo.png"

function App() {
  return (
    <div className="App">
      <div className="titulo">
        <img src={logo} alt={logo}></img>
        <h1>ZapRecall</h1>
      </div>
      <div></div>
    </div>
  );
}

export default App;
