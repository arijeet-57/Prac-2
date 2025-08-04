import { useState } from "react"

function App() {
const [title, setTitle] = useState("My name is Roy"); //this is the base state

function updateTitle() {
  setTitle("My name is " + Math.random()); //.this is what the state will look after clicking the button
}
  return (
    // we can also use <div> in the below line to store the two Header siblings, but using <> </> is much better as it does not introduce a new element
    <>  
      <button onClick={updateTitle}>Update the title</button> {/* calling the function for the button */}
      <Header title={title}></Header> {/*by default it uses "My name is Roy" but on clicking the onClick, it changes to the desired result*/}
      <Header title="ROY"></Header>
    </>
  )
}

function Header({title}) { //header component taken as function
  return <div>
    {title}
  </div>
}

export default App
