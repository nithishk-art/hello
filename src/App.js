import './App.css';
import { useState } from 'react';
import Result from './result';
       const secertNum=Math.floor(Math.random() *10) +1;
     
function App() {
  const[term,setTerm]=useState("")
  const handleChange=(event)=>{
           setTerm(event.target.value)
  }
  return (
  <div className="container">
        <div className='head'>
              <label htmlFor='term'>
                Guess the number 1 to 10
              </label>
        </div>
        <input 
        id='term'
        type='text'
        name='term'
        />
        <Result secertNum={secertNum} term={term}/>
  </div>
  )
};

export default App;
