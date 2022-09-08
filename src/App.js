import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Testing if the script tag changes.</p>
        <img
          alt="Image of Bill Murray"
          src="https://www.fillmurray.com/800/800"
        />
      </header>
    </div>
  );
}

export default App;
