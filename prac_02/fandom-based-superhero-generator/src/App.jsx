import { Dc } from "./components/dc"
import { Marvel } from "./components/marvel"
import { TheBoys } from "./components/theBoys"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Navgiation() {
      return (
        <nav style={{display: "flex", gap:"20px", padding:"10px", background:"black", color:"white"}}>
            <Link style={{color:"white", textDecoration:"none"}} to="/">Home</Link>
            <Link style={{color:"white", textDecoration:"none"}} to="/dc">DC</Link>
            <Link style={{color:"white", textDecoration:"none"}} to="/marvel">Marvel</Link>
            <Link style={{color:"white", textDecoration:"none"}} to="/theBoys">The Boys</Link>
        </nav>
    )
}

function Home() {
    return (
        <div>
            <h1>Welcome to the Superhero Platform</h1>
            <p>Select your fandom from the navigation bar on the top</p>
        </div>
    )
}

function App() {

    return (
      <BrowserRouter>
        <Navgiation/>
        <Routes>
             <Route path="/" element={<Home />} />
                <Route path="/dc" element={<Dc />} />
                <Route path="/marvel" element={<Marvel />} />
                <Route path="/theBoys" element={<TheBoys />} />
        </Routes>
      </BrowserRouter>
    )
}
export default App
