// import { useState } from "react"

const { useState, useEffect } = require("react");

// function App() {
// const [title, setTitle] = useState("My name is Roy"); //this is the base state

// function updateTitle() {
//   setTitle("My name is " + Math.random()); //.this is what the state will look after clicking the button
// }
//   return (
//     // we can also use <div> in the below line to store the two Header siblings, but using <> </> is much better as it does not introduce a new element
//     <div>  
//       <button onClick={updateTitle}>Update the title</button> {/* calling the function for the button */}
//       <Header title={title}></Header> {/*by default it uses "My name is Roy" but on clicking the onClick, it changes to the desired result*/}
//       <Header title="ROY"></Header>
//       <Header title="ROY"></Header>
//       <Header title="ROY"></Header>
//     </div>
//   )
// }

// function Header({title}) { //header component taken as function
//   return <div>
//     {title}
//   </div>
// }

// export default App




//The code above is not a very optimal way as it re renders a lot, so below is the optimal code

// import { useState } from "react"

// function App() {
//   return (
//     // we can also use <div> in the below line to store the two Header siblings, but using <> </> is much better as it does not introduce a new element
//     <div>  
//       <HeaderWithButton/>
//       <Header title="ROY"></Header>
//       <Header title="ROY"></Header>
//       <Header title="ROY"></Header>
//     </div>
//   )
// }



// function HeaderWithButton() {
// const [title, setTitle] = useState("My name is Roy"); //this is the base state
// function updateTitle() {
//   setTitle("My name is " + Math.random()); //.this is what the state will look after clicking the button
// }
// return <div>
//   <button onClick={updateTitle}>Update the title</button> {/* calling the function for the button */}
//   <Header title={title}></Header> {/*by default it uses "My name is Roy" but on clicking the onClick, it changes to the desired result*/}
// </div>
// }



// function Header({title}) { //header component taken as function
//   return <div>
//     {title}
//   </div>
// }






// Now we will be creating a todo app that renders 3 todos

// import { useState } from "react"

// let counter = 4;

// function App() {
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: "Go to gym",
//     description: "GO gym"
//   },{
//      id: 1,
//     title: "Go to gym",
//     description: "GO gym"
//   },{
//      id: 1,
//     title: "Go to gym",
//     description: "GO gym"
//   }])

//   function addTodo() {
//     setTodos([...todos, { //the three dots are for the existing three todods and then this spread function starts to add the next todo after that
//       // id: 4, //here the id is hardcorded as 4. we need to change it update it simultaneously
//       id: counter++, //now the global variable will increment accordingly
//       title: Math.random(),
//       description: Math.random()
//     }])
//   }

//   return (
//     <div>  
//       <button onClick={addTodo}>Add a todo</button>
//      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
//      {/* {todos.map(function(todo) {
//       return <Todo title={todo.title} description={todo.description} /> */} {/*THIS CODE CAN ALSO BE USED BUT ABOVE LINE IS EASIER AND SHORT*/}

//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

//NOW UNDERSTANDING USING FETCH AND HOOKS

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(res) {
         const json = await res.json();
    setTodos(json.todos);
  })
    }, 5000);

}, [])

return <div>
  {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
</div>
}


function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}
export default App