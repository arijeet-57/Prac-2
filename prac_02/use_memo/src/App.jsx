import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Create an app that does two things:
//1. Increase a counter by 1
//2. Lets user put avalue in an input box(n) and you need to show sum from 1 to n.
//Restriction: Everything needs to be inside App



function App() {
  const [counter, setCounter] =  useState(0);
  const [inputValue, setInputValue] = useState(1); //as the count will start from 1 so the base state value is 1

  let count = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
      count = count + i;
    }
    return count;
  } ,[inputValue]); //so this says that on the dependency array we have put input array, then this will render only when we change the input Value


  return <div>
      <input onChange={function(e) {
        setInputValue(e.target.value);
      }} />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => {
        setCounter(counter+1)
      }}>Count ({counter})</button>
    </div>
  
}

export default App;
