const express = require("express");
const { user } = require("../db/db");
const app = express();

app.use(express.json());

async function userValidate(req, res,next) {
    const {username, password} = req.headers;

    if (!username || !password) {
        return res.status(401).json({ msg: "Missing username or password in headers" });
    }

    const existingUser = await user.findOne({username});
    if(!existingUser) {
        return res.json({
            msg: "User does not exist.."
        })
    }

    next();
}

module.exports = {
    userValidate
}