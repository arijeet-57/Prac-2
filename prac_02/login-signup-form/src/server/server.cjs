const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const user  = require("../database/db.cjs");
const userValidate  = require("./middleware.cjs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new user({username, password});
    await newUser.save();

    res.json({
        msg:"User is registered"
    })

})

app.post("/login", userValidate, async function(req, res) {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.json({
            msg: "Enter valid credentials..."
        })
    }

    res.json({
        msg: "Access given..."
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});