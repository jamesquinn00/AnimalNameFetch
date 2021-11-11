const cats = document.querySelector("#cats");
const dogs = document.querySelector("#dogs");
const unicorns = document.querySelector("#unicorns");
const section = document.querySelector("section");

async function addInfo(type){
    const newP = document.createElement("p");
    let response = await fetch(`http://localhost:3000/${type}`)
    response = await response.json()
    newP.textContent = response.names
    section.appendChild(newP)
}

cats.addEventListener("click", e =>{
    addInfo("cats")
})
dogs.addEventListener("click", e =>{
    addInfo("dogs")
})
unicorns.addEventListener("click", e =>{
    addInfo("unicorns")
})


// function buttons(){
//     button.addEventListener("click", e=>{
//         if (cats.value === "cats"){
//             fetch('http://localhost:3000/cats')
//                 .then(x => x.json())
//                 .then(data => console.log(data));
//             console.log(x);

//         }
//         else if (button.value === "dogs"){
//             fetch('http://localhost:3000/dogs')
//                 .then(x => x.json())
//                 .then(data => console.log(data));
//             console.log(x)
//         }
//         else if (button.value === "unicorns"){
//             fetch('http://localhost:3000/unicorns')
//                 .then(x => x.json())
//                 .then(data => console.log(data));
//             console.log(x)
//         }
//     })
// }