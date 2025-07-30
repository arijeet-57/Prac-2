const mongoose = require("mongoose");
const { boolean } = require("zod");
const { ParseStatus } = require("zod/v3");

mongoose.connect("mongodb://localhost:27017/shop_app")

const userSchema = mongoose.Schema({
    username : String,
    password : String
});

const adminSchema = mongoose.Schema({
    username: String,
    password: String
});

const productSchema = mongoose.Schema({
    name: String,
    price: String,
    rating: Number,
    bought: boolean
});


const user = mongoose.model("Users", userSchema);
const admin = mongoose.model("Admins", adminSchema);
const product = mongoose.model("Products", productSchema);

module.exports = {
    user,
    admin,
    product
};