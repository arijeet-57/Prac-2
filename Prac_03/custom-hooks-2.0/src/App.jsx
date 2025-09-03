import React from "react";
import { useEffect } from "react";
import { useState } from "react"


function App() {

  const [render, setRender] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(false)
    }, 3000);
  }, [])

  useEffect(() => {
    setInterval(() => {
      setShow(r => !r)
    }, 3000)
  }, [])

  return (
    <>
     <MyComponent/>
     <Component/>
     { render ? <ComponentTwo/> : <div>2nd div</div>}
     {  show ? <ComponentTwo/> : <div>3rd Element</div>}
    </>
  )
}


// Below is an old method of how classes were used when hooks were not there
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count : 0};
  }

  incrementCount = () => {
      this.setState({count: this.state.count + 1})
  }

  render() {
      return (
        <div>
          <p>{this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      )
  } 
}

//************************************************************************************************ */
//************************************************************************************************ */

///Below is the method using useState
function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}



//Using useEffect as normal

function ComponentTwo() {
  useEffect(() => {
    console.error("Component mountd");

    return () => {
      console.log("Component Unmounted")
    }
  }, []); 

  return (
    <div>
      From inside the component
    </div>
  )

}

export default App
