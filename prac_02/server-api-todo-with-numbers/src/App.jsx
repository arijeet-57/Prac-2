import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <div> 
    {/* we call the todo with the task id */}
    <Todo id={2} /> 
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
  }, []) //notice how if you put id here in the dependency array then the output onthe screen just refreshes simultaneously as we save the code but if we do not pass it then after chaning the id we have
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
