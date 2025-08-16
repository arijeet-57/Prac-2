const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//data for the onePiece anime characters
const onePiece = [
    { id: 1,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpR24fRQKQUeb_vZ5mhvekQZvj5iSfiFhKNw&s", Name: "Luffy", Power: "9/10", Experience: "8/10", Skills: "8/10" },
    { id: 2,Image:"https://i.pinimg.com/736x/ed/b7/0c/edb70ce8479eeb4c096b4d19fb2d305e.jpg", Name: "Zoro", Power: "9/10", Experience: "8/10", Skills: "9/10" },
    { id: 3,Image:"https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20240122012744", Name: "Sanji", Power: "8/10", Experience: "8/10", Skills: "9/10" },
    { id: 4,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCV_4zcR4rNi0rMr5tjZpNn6xqKuu0WYyRkQ&s", Name: "Nami", Power: "6/10", Experience: "7/10", Skills: "8/10" },
    { id: 5,Image:"https://static.wikia.nocookie.net/all-worlds-alliance/images/5/53/Usopp.png/revision/latest?cb=20180602020636", Name: "Usopp", Power: "5/10", Experience: "6/10", Skills: "7/10" }
];
//Server for the onepiece universe
app.get("/onePiece", (req,res) => {
    const randomIndex = Math.floor(Math.random() * onePiece.length);
    res.json(onePiece[randomIndex]);
})

//data for the onePiece dbz characters
const dbz = [
    { id: 1,Image:"https://www.superherotoystore.com/cdn/shop/articles/e33c2fa94c03efa06678116f80d62d0d_708x.jpg?v=1590599656", Name: "Goku", Power: "10/10", Experience: "9/10", Skills: "10/10" },
    { id: 2,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7TJJ2AR4LmhMdHJl1XjV74SrUgYp5MzDsIlmiOndOwe2xu1ShqETNc6Cy2zrfPqiF20&usqp=CAU", Name: "Vegeta", Power: "9/10", Experience: "9/10", Skills: "9/10" },
    { id: 3,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnX-YlCc2JQBvo0H9CifHX4iJDE2QLXPrVHw&s", Name: "Piccolo", Power: "8/10", Experience: "9/10", Skills: "8/10" },
    { id: 4,Image:"https://static.wikia.nocookie.net/world-war-fan-fiction-series/images/6/6c/Gohan.png/revision/latest?cb=20190209124545", Name: "Gohan", Power: "8/10", Experience: "7/10", Skills: "8/10" },
    { id: 5,Image:"https://static.wikia.nocookie.net/dragonball/images/e/ee/DBS_Broly_Frieza_Render.png/revision/latest?cb=20221019232854", Name: "Frieza", Power: "9/10", Experience: "8/10", Skills: "9/10" }
];
//Server for the dbz universe
app.get("/dbz", (req,res) => {
    const randomIndex = Math.floor(Math.random() * dbz.length);
    res.json(dbz[randomIndex]);
})

//data for the onePiece naruto characters
const naruto = [
    { id: 1,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5xj92Hbb6z283YnjTdkeuzlVIGKXSmNAeRA&s", Name: "Naruto Uzumaki", Power: "9/10", Experience: "8/10", Skills: "9/10" },
    { id: 2,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Y31ZXKRb2d_I0dDeUu_tjJwkwP8hAXFTOQ&s", Name: "Sasuke Uchiha", Power: "9/10", Experience: "8/10", Skills: "9/10" },
    { id: 3,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAeD1mc-LNmXHOvjnJEpYl-FBT1iqzkxU4w&s", Name: "Sakura Haruno", Power: "7/10", Experience: "7/10", Skills: "7/10" },
    { id: 4,Image:"https://i.pinimg.com/originals/ee/a2/1d/eea21dfa6e1fc1361a7867c713ec319a.jpg", Name: "Kakashi Hatake", Power: "9/10", Experience: "9/10", Skills: "9/10" },
    { id: 5,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPm34eb7j9VH9Bx5t1iVENtQPC8NkFonaqw&s", Name: "Gaara", Power: "8/10", Experience: "8/10", Skills: "8/10" }
];
//Server for the narution universe
app.get("/naruto", (req,res) => {
    const randomIndex = Math.floor(Math.random() * naruto.length);
    res.json(naruto[randomIndex]);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})