const express = require("express");
const cors = require("cors");
const user = require("../database/db.cjs");

const app = express();

app.use(cors());

async function userValidate(req, res, next) {
    const {username, password} = req.body;

    const existingUser = await user.findOne({username, password});

    if(!existingUser) {
        return res.json({
            msg: "User not found..."
        })
    }
    
   next();

}

module.exports = userValidate;