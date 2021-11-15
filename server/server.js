const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const mealRoutes = require("./controllers/meals");
//const moduleDeps = require("module-deps");
app.use("/load", mealRoutes)

app.get("/", (req,res)=> {
    res.send("This is homepage");
})

// app.get("/load", (req,res)=> {
//     res.send("This is the load meals page");
// })

app.post("/", (req,res)=> {
    res.status(405).send("Not allowed?")
})

module.exports = app;