import React from 'react';
import {useState} from 'react';
import {Message} from './Message.js';
import {Daytime} from './Daytime.js'
import './App.css';

export default function App() {
  let [count, setCount] = useState(1)
  let [isMorning, setMorning] = useState(true)

  return (
    <div className={`${isMorning ? 'App-day' : 'App-night'}`}>
      <header className="App-header"> 
     
      {/* The Counter has to match the counter in the Message.js file      */}
  <Message counter={count}/> 
  <button onClick={
    // ()=> alert("Not updated yet, Checkback later")
    ()=> setCount(++count)
    }
    >Counter Update</button>
      </header>
{/* <br/> */}
<body className="App-body">
      
    <Daytime isMorning={isMorning}/>
    
    <button onClick={
    // ()=> alert("Not updated yet, Checkback later")
    ()=> setMorning(!isMorning)
    }
    >Time Shift</button>
    </body>
    </div>
    
  )

};
