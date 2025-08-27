const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const tabs = ["jobs", "messages", "notifications"];

function randomData() {
    const countObj = {};

    tabs.forEach(tab => {
        countObj[tab] = Math.floor(Math.random() * 101);
    })

    return countObj;
};

app.get("/notifications", async function(req, res) {
    res.json(randomData());
});

app.listen(3000, () => {
    console.log("Running !...")
})