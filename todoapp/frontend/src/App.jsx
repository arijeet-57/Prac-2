import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/todos'

function App() {

  return (

      <div>
        <CreateTodo></CreateTodo> {/*it renders the div for the Todo */}
       <Todos></Todos> {/*renders the innder components of the todo*/}
      </div>
      
  )
}

export default App
