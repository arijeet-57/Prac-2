const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());


function middleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password) 
      return res.json({
            msg:"User access not given !"
        })
    
        next();
}

app.post("/signup" ,middleware, async function(req,res) {
    
    res.json({
        msg: "User Signup Done !"
    })
})

app.post("/register" ,middleware, async function(req,res) {
 
    res.json({
        msg: "User Registered !"
    })
})

app.post("/login" ,middleware, async function(req,res) {


    res.json({
        msg: "User access provided !"
    })
})




app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})