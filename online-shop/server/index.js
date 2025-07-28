const express = require("express");
const { adminValidate } = require("../middlwares/adminMiddleware");
const { admin, product } = require("../db/db");
const app = express();

app.use(express.json()); //uses express json format explicitly for all the routes

//Admin routes
app.post("/adminSignup", async function(req,res) {
    const {username , password} = req.body;
    
    if(!username || !password) {
        return res.status(400).json({
            msg: "Wrong inputs !"
        })
    }

    const newAdmin = new admin({username, password});
    await newAdmin.save(); //creates the new admin and saves it in the admin db

        res.status(200).json({
        msg: "Admin created..."
    });
})


app.post("/adminLogin",adminValidate, async function(req,res) {
    const {username, password} = req.headers;


    const existingUser = await admin.findOne({username});
    if(existingUser) {
       return res.status(200).json({
            msg: "User access granted..."
        })
    }
});


app.post("/productPost",adminValidate, async function(req,res) {

    const name = req.body.name;
    const price = req.body.price;
    const rating = req.body.rating;


    const existingProduct = await product.findOne({name});
    if(existingProduct) {
        return res.json({
            msg: "Product already exists"
        })
    }

    const newProduct = new product({name, price, rating});
    await newProduct.save();

    res.json({
        msg:`${newProduct.name} product posted successfully !`
    })

});


app.get("/getProducts", adminValidate, async function(req,res) {
    const products = await product.find();
    res.json({products});
})

app.put



app.listen(3000, () => {
    console.log("App is running on port 3000");
})