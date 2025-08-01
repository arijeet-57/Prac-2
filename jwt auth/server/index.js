const express = require("express");
const { user } = require("../db/db");
const app = express();

app.use(express.json());

app.post("/signup", async function(req,res) {
    const {username, password} =  req.body;

    try {
        const newUser = new user({username, password});
        await newUser.save();

        res.status(201).json({
            msg: "User created..."
        })
    }catch (err) {
        res.json({
            msg: "Error in server side..."
        })
    }
});

app.post("/login", async function(req, res) {
        const {username, password} = req.body;

        try {
            const existingUser = await user.findOne({username, password});
            if (!existingUser) {
                res.json({
                    msg: "User does not exist..."
                })
            }

           res.json({
            msg: "Clearance given..."
           })
        }catch (err) {
            res.status(500).json({
                msg: "Server error..."
            })
        }
})  


app.listen(3000, () => {
    console.log("App is running on port 3000");
});