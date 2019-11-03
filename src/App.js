import React from 'react';
import logo from './Logo_pokemon.png';
import './App.css';
import List from './Components/Pokemon/List.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List />
      </header>
    </div>
  );
}

export default App;
