import Logo from './logo.svg';
import './App.css';

function App() {
  const a = 'hello'
  console.log("🚀 ~ file: App.js:7 ~ App ~ a", a)

  return (
    <div className="App">
      <header className="App-header">
      <Logo />
        {/* <img src={Logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
