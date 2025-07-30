const express = require("express");
const { adminValidate } = require("../middlwares/adminMiddleware");
const { admin, product, user } = require("../db/db");
const { userValidate } = require("../middlwares/userMiddleware");
const app = express();

app.use(express.json()); //uses express json format explicitly for all the routes

//Admin routes




//Signup for admin
app.post("/adminSignup", async function(req,res) {
    
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




//login for admin
app.post("/adminLogin",adminValidate, async function(req,res) {

    const existingUser = await admin.findOne({username});
    if(existingUser) {
       return res.status(200).json({
            msg: "User access granted..."
        })
    }
});




//posting the product on the site
app.post("/productPost",adminValidate, async function(req,res) {

    const name = req.body.name;
    const price = req.body.price;
    const rating = req.body.rating;
    const bought = false;


    const existingProduct = await product.findOne({name});
    if(existingProduct) {
        return res.json({
            msg: "Product already exists"
        })
    }

    const newProduct = new product({name, price, rating, bought});
    await newProduct.save();

    res.json({
        msg:`${newProduct.name} product posted successfully !`
    })

});




//shows the products to the admin
app.get("/getProducts", adminValidate, async function(req,res) {
    const products = await product.find();
    res.json({products});
})




//update any product
app.put("/updateProduct/:id", adminValidate,async function(req, res) {

    const {id} = req.params; //send the porduct id as "/updateProduct/<id>"
    const {name, price, rating, bought} = req.body; //send the new information for tha product id in the body

    const updatedProduct = await product.findByIdAndUpdate( //this finds the product by id and updates it with the new information
        id,
        {name, price, rating, bought},
        {new: true}
    );

    if (!updatedProduct) { //if we enter wrong id for the product in the params, this will return an error
       return res.status(404).json({
            msg: "Product not found..."
        })
    }

    res.json({
        msg: "Product updated succesfully",
        updatedProduct
    });
});








// User routes


//signup for user
app.post("/userSignup",async function(req, res) {

    if(!username || !password) {
       return res.json({
            msg : "Invalid inputs!"
        })
    }

    const newUser = new user({username, password});
    await newUser.save();

    res.status(200).json({
        msg : "Welcome to the app..."
    })
})



//login for user
app.post("/userLogin",userValidate, async function(req, res) {

   const existingUser = await user.findOne({username});
    if(!existingUser) {
        return res.status(404).json({
            msg : "User does not exist!"
        })
    }

    res.status(200).json({
        msg : "Welcome to the app..."
    })
});



//shows products for the user
app.get("/getItems", userValidate, async function(req, res) {

    const products = await product.find();
    res.json(products);
})


//user can get specific item on basis of name
app.get("/getSpecific", userValidate, async function(req, res) {

    const name = req.body.name;


    const item = await product.findOne({name});
    res.json(item);
})



//updates the status for the product to true when bought
app.put("/bought/:id", userValidate, async function(req, res) {

    const id = req.params.id;
    const {bought} = req.body

    const item = await product.findByIdAndUpdate(
        id,
        {bought}, 
        {new: true}
    )

    res.json({
        msg: "Thanks for choosing us!"
    })
})


app.listen(3000, () => {
    console.log("App is running on port 3000");
})