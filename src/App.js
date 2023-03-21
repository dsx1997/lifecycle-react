import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      
      
      <header className="App-header">
        <Game />
      </header>      
      
    </div>
  );
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h1>Hello World</h1>
        </div>
      </div>
    );
  }
}

// ========================================


export default App;
