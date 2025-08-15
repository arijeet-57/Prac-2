const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const quotes = [
    { id: 1, line: "The quieter you become, the more you can hear." },
    { id: 2, line: "Sometimes the right path is not the easiest one." },
    { id: 3, line: "Your future is created by what you do today, not tomorrow." },
    { id: 4, line: "The mind is everything. What you think, you become." },
    { id: 5, line: "Small steps every day lead to big changes over time." },
    { id: 6, line: "Not all storms come to disrupt your life, some clear your path." },
    { id: 7, line: "You are exactly where you need to be, even if it doesn’t feel like it." },
    { id: 8, line: "A ship is safe in harbor, but that’s not what ships are built for." },
    { id: 9, line: "Don’t count the days, make the days count." },
    { id: 10, line: "Sometimes the most productive thing you can do is rest." }
];


app.get("/", function(req, res) {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    res.json(quotes[randomIndex]);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})