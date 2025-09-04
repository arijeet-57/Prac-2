import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

//Creating a custom hook for our own
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = () => {
      axios.get("http://localhost:3000/todos")
        .then(res => {
          setTodos(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching todos:", err);
          setLoading(false);
        });
    };

    // Initial fetch
    fetchTodos();

    // Periodic fetch
    const value = setInterval(fetchTodos, n * 1000);

    // Cleanup
    return () => clearInterval(value);
  }, [n]);

  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodos(5);

  if (loading) {
    return <div>
      Loading...
    </div>;
  }

  // else this below code will return
  return (
    <div>
      {todos.map(todo => <Todos key={todo.id} todo={todo} />)}
    </div>
  );
}

function Todos({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>;
}

export default App;
