import { useState } from 'react';
import './App.css';
import Registr from './pages/Registr';
import Main from './pages/Main';


function App() {
  const [state,setState]=useState(false)
  const obj = {
    trueState:()=>setState(true),
    falseState:()=>setState(false),
  }
  return (
    <div className="App">
      {state  && <Registr obj={obj}/>}
      {!state && <Main/>}
    </div>
  );
}

export default App;
