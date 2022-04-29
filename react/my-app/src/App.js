import 'core-js';
import logo from './logo.svg';
import './App.css';

/* 
  RETROCOMPATIBILIDAD
  Los polyfills nos permiten hacer nuestra aplicación compatible con navegadores antiguos, 
  que no admiten de forma nativa alguna nueva funcionalidad.
*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
