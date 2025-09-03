import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

//Creating a custom hook for our own
function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    axios.get("http://localhost:3000/todos")
    .then(res => {
      setTodos(res.data);
      setLoading(false);
    })}, 3000)
  }, []);

  return {todos, loading};
}

function App() { 

  const {todos, loading} = useTodos();

  if(loading) {
    return <div>
      Loading...
    </div>
  }
//else this below code will return
  return (
    <div>
      {todos.map(todo => <Todos todo={todo}/>)}
    </div>
  )
}

function Todos({todo}) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}
export default App
