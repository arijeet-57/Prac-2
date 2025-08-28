import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { todoAtomsFamily } from './atoms'

function App() {
 return (
  <RecoilRoot>
    <Todo id={1}/>
    <br />
    <Todo id={2}/>
  </RecoilRoot>
 )
  
}

function Todo({id}) {
  const currentTodo = useRecoilValue(todoAtomsFamily(id));

  return (
    <>
      {currentTodo.title} 
      <br />
      {currentTodo.description}
      <br />
    </> 
  )
}

export default App
