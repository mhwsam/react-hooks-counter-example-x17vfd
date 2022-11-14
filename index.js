import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Counter() {
  const [counter, setCounter] = useState(100);

  function increment() {
    setCounter(counter+1);
  }
  const  vari = 0;
  function reset(){
  
   setCounter(vari) ;
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
  

  <button onClick={reset}>Reset </button>
  </div>;
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);