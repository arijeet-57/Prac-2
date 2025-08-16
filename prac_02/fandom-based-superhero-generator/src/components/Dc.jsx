import { useState } from "react";

export function Dc() {

const [hero, setHero] =  useState();

const fetchHero =  async () => {
    
    try {
    const res = await fetch("http://localhost:3000/dc");
    const data = await res.json();
    setHero(data.title)
    }catch(err) {
    setHero("Error in fetching the hero from the fandom...")
    }
}

    return <div>
        <div>
            <h1>DC</h1>
            <p>{hero}</p>
        </div>
        <button onClick={fetchHero}>Hero</button>
    </div>
}