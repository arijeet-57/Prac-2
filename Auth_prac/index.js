const express = require("express");
const { json } = require("zod/v4");
const { user } = require("./db");

const app = express();

app.use(express.json());

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password) {
        res.status(400).json({
            msg: "Wrong Input(s) !"
        });
    }

    const existingUser = await user.findOne({username});
    if(existingUser) {
        return res.status(401).json({
            msg: "User already exists !"
        })
    }

    const newUser = new user({username, password});
    await newUser.save();

    res.status(200).json({
        msg: "User clearance given !"
    })

})

function validate(req, res,next) {
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password) {
        res.status(400).json({
            msg: "Wrong Input(s) !"
        });
    }else{
        next();
    }

}

app.post("/login",validate, async function(req,res) {
    const {username, password} = req.body;

    const existingUser = await user.findOne({username, password});

    if(!existingUser) {
        return res.status(401).json({
            msg: "Invalid credentials"
        })
    }

    res.json({
        msg: "Login Successful !"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});