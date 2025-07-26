const mongoose = require("mongoose");
const { ParseStatus } = require("zod/v3");

mongoose.connect("mongodb://localhost:27017/prac_02");

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

const user = mongoose.model("Users", userSchema);

module.exports = {
    user
};