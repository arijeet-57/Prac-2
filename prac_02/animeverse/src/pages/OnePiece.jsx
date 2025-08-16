import { useState } from "react";
import { useEffect } from "react";
import "./pages.css";

export function OnePiece() {
 const [character, setCharacter] = useState();

async function next() {
    try {
        const res = await fetch("http://localhost:3000/onePiece");
        const data = await res.json();
        setCharacter(data)
    }catch(err){
        setCharacter({Name: "Error...", Power: "Error", Experience: "Error", Skills: "Error"})
    }
}

useEffect(() => {
    next();
}, [])

     return(
    <div className="container">
        <div className="characterCard">
            {character && ( 
            <>
            <img src={character.Image} width="200" height="300" />
            <h4>Name : {character.Name}</h4>
            <h4>Power : {character.Power}</h4>
            <h4>Experience : {character.Experience}</h4>
            <h4>Skills : {character.Skills}</h4>
            <button onClick={next}>Next</button>
            </>
            )}
        </div>
    </div>
    );
}