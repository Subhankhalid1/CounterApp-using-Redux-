import React from 'react';
import './App.css';
import CounterInput from './component/CounterInput';
import CounterOutput from './component/CounterOutput';
function App() {
  return (
    <div className="App">
      <h1>CounterApp using Redux!</h1>
      <h6>CREATED BY SUBHAN KHALID </h6>
      <h4>BootCamp2020</h4>
      <header className="App-header">


      <CounterOutput/>
<br/> <br/> 
       <CounterInput/>
      
      </header>
    </div>
  );
}

export default App;
