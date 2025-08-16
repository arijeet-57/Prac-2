const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const marvel = [
    {id: 1, title: "Hulk"},
    {id: 2, title: "Iron Man"},
    {id: 3, title: "Captain America"},
    {id: 4, title: "Hawkeye"},
    {id: 5, title: "Black Widow"},
]

const dc = [
    {id: 1, title: "Batman"},
    {id: 2, title: "Aquaman"},
    {id: 3, title: "Superman"},
    {id: 4, title: "Wonder Woman"},
    {id: 5, title: "Flash"},
]

const theBoys = [
    {id: 1, title: "Homelander"},
    {id: 2, title: "Billy Butcher"},
    {id: 3, title: "Soldier Boy"},
    {id: 4, title: "A-Train"},
    {id: 5, title: "Black Noir"},
]

app.get("/dc", function(req, res) {
    const randomIndex = Math.floor(Math.random() * dc.length);
    res.json(dc[randomIndex]);
})

app.get("/marvel", function(req, res) {
    const randomIndex = Math.floor(Math.random() * marvel.length);
    res.json(marvel[randomIndex]);
})

app.get("/theBoys", function(req, res) {
    const randomIndex = Math.floor(Math.random() * theBoys.length);
    res.json(theBoys[randomIndex]);
})

app.listen(3000, () => {
    console.log("The server is running on port 3000");
})