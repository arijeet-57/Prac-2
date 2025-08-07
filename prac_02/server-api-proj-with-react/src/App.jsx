import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return <div>
    <button onClick={function() {setSelectedId(1)}}>Home</button>
    <button onClick={function() {setSelectedId(2)}}>About Us</button>
    <button onClick={function() {setSelectedId(3)}}>Projects</button>
    <button onClick={function() {setSelectedId(4)}}>Careers</button>
    <button onClick={function() {setSelectedId(5)}}>Contact</button>
  
  <Tab id={selectedId} />

  </div>
}

function Tab({id}) {
  const [tab, setTab] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/tabs/" +id)
    .then(async function(res) {
      const json = await res.json();
      setTab(json);
    })
  }, [id])

  return <div>
    <h1>{tab.title}</h1>
  </div>
}


export default App
