const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/react-login-signup")

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const user = mongoose.model("User", userSchema);

module.exports = user;