import React from 'react';
import logo from './logo.svg';
import './App.css';
import Vitor from './Vitor'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <Vitor/>
        
      </header>
    </div>
  );
}

export default App;
