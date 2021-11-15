const newMeals = document.querySelector("#new-meals")
const ordered = document.querySelector("#ordered")

async function loadMenu(){
    const menu = document.querySelector("#menu");
    try{
        let response = await fetch(`http://localhost:3000/load`)
        response = await response.json()
        // console.log(response)
        for(const element of response){
            menu.appendChild(mealDisplay(element))
        }
    } catch(err){
        // console.log("error occurred")
        console.log(err)
    }
}

function mealDisplay(meal){
    // console.log(meal)
    delete meal.id
    const newUl = document.createElement("ul");
    for(const x in meal){
        const newLi = document.createElement("li");
        // console.log(x + ": " + meal[x])
        newLi.textContent = x + ": " + meal[x];
        newUl.appendChild(newLi);
    
    }
    return newUl
}

const form = document.querySelector("form")

form.addEventListener("submit", e=>{
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    // console.log(formData);
    newMeals.appendChild(mealDisplay(formData));
    ordered.style.display = "block";

})

// async function sendData(data){
//     const response = await fetch("http://localhost:3000", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content Type": "application/json; charset=UTF-8"
//         }
//     })
//     response = await response.json()
// }  

