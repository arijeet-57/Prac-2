import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/todos'

function App() {

  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })

  return (

      <div>
        <CreateTodo></CreateTodo> {/*it renders the div for the Todo */}
       <Todos> todos={todos}</Todos> {/*renders the innder components of the todo*/}
      </div>
      
  )
}

export default App
