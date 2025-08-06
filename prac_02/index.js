const express = require('express');
const cors = require('cors'); // Add this
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS so frontend can access this

// Static TODO list
const todos = [
  { id: 1, task: "Drink water", completed: false },
  { id: 2, task: "Write code", completed: false },
  { id: 3, task: "Go for a walk", completed: true },
  { id: 4, task: "Read a book", completed: false },
  { id: 5, task: "Take a nap", completed: true }
];

// Route: GET /todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Route: GET /todos/:id
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id); //asking for the id in the params itself ==> 'fetch("http://localhost:3000/todos/" + id)'
  const todo = todos.find(t => t.id === id); //finds the todo based on the id 
  
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "TODO not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`TODO API running at http://localhost:${port}`);
});
