const server = require("./server.js");

server.listen(3000, ()=> {
    console.log("\n Express running on port 3000\n")
    console.log("http://localhost:3000/")
});