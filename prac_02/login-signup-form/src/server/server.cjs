const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const user  = require("../database/db.cjs");
const userValidate  = require("./middleware.cjs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register",userValidate, async function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new user({username, password});
    await newUser.save();

    res.json({
        msg:"User is registered, now move to login..."
    })

})

app.post("/login", async function(req, res) {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.json({
            msg: "Enter valid credentials..."
        })
    }

    const existingUser = await user.findOne({username, password});

    if(!existingUser) {
        return res.json({
            msg: "Enter valid credentials..."
        })
    }

    res.json({
        msg: "Whooooo Login Successfull !"
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});