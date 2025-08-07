import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [selectedId, setSelectedId ] = useState(1); //state variable for the changing states when we click a button for a specific todo
  return <div> 
    {/* we call the todo with the task id */}
    <button onClick={function() {setSelectedId(1)}}>1</button>
    <button onClick={function() {setSelectedId(2)}}>2</button> {/* chanigng the stateid whenever we click a number */}
    <button onClick={function() {setSelectedId(3)}}>3</button>
    <button onClick={function() {setSelectedId(4)}}>4</button>
    <button onClick={function() {setSelectedId(5)}}>5</button>

    {/* Passing the selected id as the proeprty ,so setSelectedId is the function used to change the value of selectedId.*/}
    <Todo id={selectedId} /> 
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/todos/" + id)
    .then(async function(res) {
            const json = await res.json();
            setTodo (json);
    })
  }, [id]) //notice how if you put id here in the dependency array then the output on the screen just refreshes simultaneously as we save the code but if we do not pass it then after chaning the id we have
  //to refresh the page again as it renders only for the first time

  return <div>
    <h1>
      {todo.task}
    </h1>
    <h4>
      {todo.completed}
    </h4>
  </div>
}

export default App;
