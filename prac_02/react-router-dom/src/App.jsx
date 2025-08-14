import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'

const Landing  = React.lazy(() => import('./components/Landing')) 
const Dashboard  =  React.lazy(() => import('./components/Dashboard')) 

function App() {
  
    return (
    <div>
    <BrowserRouter>
      <Appbar/>
     <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Landing/>} />
     </Routes>
    </BrowserRouter>
    </div>
    )
}

function Appbar() {

const navigate = useNavigate();

return <div>
<div>
            <button onClick={() => {
                navigate("/dashboard")
            }}>Dashboard</button>

            <button onClick={() => {
                navigate("/")
            }}>Landing</button>
    </div>
</div>
}

export default App
