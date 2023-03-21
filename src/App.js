import './App.css';
import React from 'react';
import {titleInfo, funcName } from './FunctionNames';

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
          <Title titleInfo={titleInfo} titleId={0}/>  
          <BuiltInMethod funcName={funcName} funcId={0} />
          <Title titleInfo={titleInfo} titleId={1}/>  
          <BuiltInMethod funcName={funcName} funcId={1} />
          <Title titleInfo={titleInfo} titleId={2}/>  
          <BuiltInMethod funcName={funcName} funcId={2} />
        </div>
      </div>
    );
  }
}

function Title(props) {

  for(let i = 0; i < props.titleInfo.length; i++) {
    if(i === props.titleId) {
      const description = props.titleInfo[i].description.map((step, no) => {
        return (
          <p className='titledescription' key={no}>{step}</p>
        );
      });
      return (
        <>
          <h1>{props.titleInfo[i].title}</h1>
          {description}
        </>
      );
    }
  }
  return;
}

function BuiltInMethod(props) {
    
    for(let i = 0; i < props.funcName.length; i++) {
      if(i === props.funcId) {

        var fList = props.funcName[i].map((step, fn) => {
          return (
            <li key={fn}>
              <p className='fname'>{step.name}</p>
              <p className='fdescription'>{step.description}</p>
            </li>
          );
        });  
      }
    };
    return (
      <div className='one-phase'><ul>{fList}</ul></div>
    );
}

// ========================================


export default App;
