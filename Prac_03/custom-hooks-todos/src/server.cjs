// server.js
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Sample todos data
const todos = [
  { id: 1, title: "Learn Express", description: "Understand basics of Express.js" },
  { id: 2, title: "Build API", description: "Make a REST API with Express" },
  { id: 3, title: "Test API", description: "Use Postman or curl to test" }
];

// GET /todos - return all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Run server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
