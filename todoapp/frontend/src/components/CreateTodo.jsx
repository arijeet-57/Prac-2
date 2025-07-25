import { useState } from "react";


export function CreateTodo() { //export will exoport the file for use in diffferent files

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}/> <br />
        <input type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}/> <br />

        <button onClick={() => {
            fetch("http://localhost:3000/todo" , {
                method: "POST" ,
                body: JSON.stringify({ //the way to send body in a post request in fetch is to stringify it
                    title: title,
                    description: description
                }),
                headers: { //also we need to send the headers as well
                    "Content-type" : "application/json"
                }
            })
            .then(async function(res) {
                const json = await res.json();
                alert("Todo Added !");
            })
        }}>Add Todo</button>
    </div>
}

