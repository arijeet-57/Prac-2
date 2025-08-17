import { useState } from "react";
import {useNavigate} from "react-router-dom";

export function LoginForm() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("")
const [message, setMessage] = useState("");

async function handleInput(e) {
    e.preventDefault(); //prevents page reload

    try {
    const res = await fetch("http://localhost:3000/login", {
        method:"POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({username, password})
    })

    const data = await res.json();
    setMessage(data.msg);
    }catch(err){
        setMessage("Error in registration...")
    }
}


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleInput}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br /> <br />
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br /> <br />
            <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}