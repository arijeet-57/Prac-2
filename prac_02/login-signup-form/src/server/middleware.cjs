const express = require("express");
const cors = require("cors");
const user = require("../database/db.cjs");

const app = express();

app.use(cors());

async function userValidate(req, res, next) {
    const {username, password} = req.body;

     if(!username || !password) {
        return res.json({
            msg: "Enter valid credentials"
        })
    }

    const existingUser = await user.findOne({username, password});

    if(existingUser) {
        return res.json({
            msg: "User already exists, try login instead..."
        })
    }
    
   next();

}

module.exports = userValidate;