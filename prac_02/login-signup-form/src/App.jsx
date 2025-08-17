import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import { RegisterPage } from "./pages/RegisterForm"
import { LoginForm } from "./pages/loginForm"

function App() {

 return (
    <BrowserRouter>
    <Routes>
        <Route path="/RegisterForm" element={<RegisterPage/>}/>
        <Route path="LoginForm" element={<LoginForm/>} />
    </Routes>
    </BrowserRouter>
 )
}

export default App
