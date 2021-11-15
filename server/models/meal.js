const mealsData = require("../data")

class Meal {
    constructor(data) {
        this.id = data.id;
        this.starter = data.starter;
        this.main = data.main;
        this.dessert = data.dessert;
        this.drink = data.drink;
    }

    static get all(){
        const meals = mealsData.map( (meal)=> new Meal(meal) );
        return meals
    }

    static findById(id){
        try{
            const mealData = mealsData.filter( (meal)=> meal.id===id )[0];
            const meal = new Meal(mealData);
            return meal;
        } catch(err){
            throw new Error("We don't serve that here!")
        }
    }

    static create(meal){
        const newMealId = mealsData.length + 1;
        const newMeal = new Meal({ id: newMealId, ...meal });
        mealsData.push(newMeal);
        return newMeal;
    }

    destroy(){
        const meal = mealsData.filter((meal)=>meal.id===this.id)[0];
        mealsData.splice(mealsData.indexOf(meal),1);
    }

}

module.exports = Meal;