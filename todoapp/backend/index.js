const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const { connect } = require("mongoose");
const app = express();
const cors = require("cors");


// function validation (req, res,next) {
//     const username = req.headers.username;;
//     const password = req.headers.password;

//     if (username && password) {
//       next();
//     }else{
//         res.status(401).json({
//             msg: "Invalid Input !"
//         });
//     };
// };
app.use(express.json());
app.use(cors({
    origin: "http:/localhost:5173" ///sets origin that only frontend requests from localhost 5173 can access this backend
}));

//inputs expected:
//title: string
//description: string

app.post("/todo", function(req,res) {
    const createPayload = req.body; //this createPayload takes the input for the todo in it in body
    const parsePayload = createTodo.safeParse(createPayload); //this parses(validates) through the createPayload body input through the zod schema defined inthe types.js for createTodo
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "Wrong Inputs !"
        })
        return;
    }
    
    todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false //completed is false because initially todo is not completed when it is created
    })
    res.json({
        msg: "Todo is created!"
    })

});

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.put("/completed", async function(req,res) {
    const updatePayload = req.body;  //this updatePayload takes the input for the todo in it in body
    const parsePayload = updateTodo.safeParse(updatePayload); //this parses(validates) through the updatePayload body input through the zod schema defined inthe types.js for updateTodo
    if(!parsePayload.success) {  
        res.status(411).json({
            msg: "Wrong Inputs !"
        })
        return;
  
    }
    await todo.updateOne({ //it updates the todo based on the did ,// note that we used updateOne because we willbe updating the data for a particular id only
        _id: req.body.id
    }, {
        completed: true  // when we mark the todo then completed gets true from its intial value of false
    })
    res.json({
        msg: "Todo marked as completed!"
    })

});

app.listen(3000, () => {
    console.log("Your app is running on port 3000");
});
