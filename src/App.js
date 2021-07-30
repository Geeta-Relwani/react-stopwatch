import React from 'react';
import './App.css';

function App() {

  // state hook, accepts 2 params var and function

  const [time,setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  // takes parameter as an arrow function and array. This hook runs as soon as the component is rendered
  //here we will pass timerOn flag/var by passing it in array so this way it will run any time timerOn var changes
  React.useEffect(()=>{
    let interval = null;

    if(timerOn){
      interval = setInterval(() =>{
        console.log('timeron')
        setTime(prevTime => prevTime + 10)
      }, 10);

    }else{
      clearInterval(interval);
    }

    return () => clearInterval(interval)
  },[timerOn])



  return (
    <div className="Timers">
      <h2>StopWatch</h2>
      <div id="display">
        {/* displays mins */}
        <span>{('0' + Math.floor((time/60000)%60)).slice(-2)}:</span> 
        {/* displays sec */}
        <span>{('0' + Math.floor((time/1000)%60)).slice(-2)}:</span> 
        {/* displays 100th os sec */}
        <span>{('0' + ((time/10)%100)).slice(-2)}</span>
      </div>
      <div  id="buttons">
        {!timerOn && time === 0 &&(
          <button onClick = {()=> setTimerOn(true)}>Start</button>
        )}
        {timerOn && (
          <button onClick = {()=> setTimerOn(false)}>Stop</button>
        )}
        {!timerOn && time > 0 &&(
          <button onClick = {()=> setTimerOn(true)}>Resume</button>
        )}
        {!timerOn && time > 0 &&(
          <button onClick = {()=> setTime(0)}>Reset</button>
        )}     
        
      </div>

    </div>
  );
}

export default App;
