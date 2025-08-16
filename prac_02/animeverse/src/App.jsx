import { useState } from 'react'
import './App.css'
import { Landing } from './pages/Landing'
import {Route, Routes, Link, useLocation} from "react-router-dom"
import { Naruto } from './pages/Naruto'
import { OnePiece } from './pages/OnePiece'
import { DragonBall } from './pages/DragonBall'


function NavBar() {
  return (
    <nav className='navbar' style={{width:"100%", height:"50px", background:"Black", color:"white"}}>
      <Link className='link' to={"/DragonBall"}>Dragon Ball</Link>
      <Link className='link' to={"/OnePiece"}>One Piece</Link>
      <Link className='link' to={"/Naruto"}>Naruto</Link>
    </nav>
  )
}


function App() {
  const location = useLocation();

  return (
    <>
    {location.pathname !== "/" && <NavBar/>}
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/DragonBall" element={<DragonBall/>} />
        <Route path="/OnePiece" element={<OnePiece/>} />
        <Route path="/Naruto" element={<Naruto/>} />
      </Routes>
    </>
  )

}

export default App
