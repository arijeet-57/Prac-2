import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'
import { Suspense } from 'react'

const Landing  = React.lazy(() => import('./components/Landing')) 
const Dashboard  =  React.lazy(() => import('./components/Dashboard')) 

function App() {
  
    return (
    <div>
    <BrowserRouter>
      <Appbar/>
     {/* Suspense shows fallback while lazy-loaded component is fetched */}
        <Suspense fallback={<div>Loading...</div>}> 
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
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
