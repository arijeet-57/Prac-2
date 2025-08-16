import { useState } from "react";

export function Marvel() {

const [hero, setHero] =  useState();

const fetchHero =  async () => {
    
    try {
    const res = await fetch("http://localhost:3000/marvel");
    const data = await res.json();
    setHero(data.title)
    }catch(err) {
    setHero("Error in fetching the hero from the fandom...")
    }
}

    return <div>
        <div>
            <h1>Marvel</h1>
            <p>{hero}</p>
        </div>
        <button onClick={fetchHero}>Hero</button>
    </div>
}