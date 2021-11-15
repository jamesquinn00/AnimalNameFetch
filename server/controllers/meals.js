const express = require("express");
const router = express.Router();

const Meal = require("../models/meal");
// console.log(Meal.all)

router.get("/", (req,res)=>{
    const mealsData = Meal.all;
    console.log("got meals")
    res.send(mealsData);
    // res.send({name: "James"})
});

router.get("/:id", (req, res)=>{
    try{
        const mealId = parseInt(req.params.id);
        const selectedMeal = Meal.findById(mealId);
        if(!selectedMeal){
            throw new Error("We don't serve that meal here");
        };
        res.send(selectedMeal);
    } catch (err){
        console.log(err);
        console.log("404 error ----");
        res.status(404).send({ message: err.message });
    };
});

router.post("/", (req,res)=>{
    const data = req.body;
    const newMeal = Meal.create(data);
    res.status(201).send(newMeal);
})

router.delete("./:id", (req,res)=> {
    const mealId = parseInt(req.params.id);
    const mealToDestroy = Meal.findById(mealId);
    mealToDestroy.destroy();
    res.status(204).send();
})

module.exports = router;