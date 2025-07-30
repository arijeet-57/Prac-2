const express = require("express");
const { admin } = require("../db/db");
const app = express();

app.use(express.json());

async function adminValidate(req, res,next) {
    const {username, password} = req.headers;

    if (!username || !password) {
        return res.status(401).json({ msg: "Missing username or password in headers" });
    }

    const existingUser = await admin.findOne({username});
    if(!existingUser) {
        return res.json({
            msg: "Admin does not exist !..."
        })
    }
    next();
}

module.exports = {
    adminValidate
}