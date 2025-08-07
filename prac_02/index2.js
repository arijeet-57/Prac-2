const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());

const tabs = [
    {id:1, title: "Home"},
    {id:2, title: "About Us"},
    {id:3, title: "Projects"},
    {id:4, title: "Careers"},
    {id:5, title: "Contact"},
]

app.get("/tabs", function(req,res) {
    res.json(tabs);
})

app.get("/tabs/:id", function(req,res) {
    const id = parseInt(req.params.id);
    const tab = tabs.find(t => t.id === id );

    if (tab) {
        res.json(tab);
    }else{
        res.json({
            msg: "Server internal error..."
        })
    }
});

app.listen(3000,() => {
    console.log("App is running on port 3000");
});