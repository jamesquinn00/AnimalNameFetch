const http = require("http");

let names = {
    allCats: ["Lennon","Dylan"],
    allDogs: ["Buster","Rex"],
    allUnicorns: ["Rainbow","John"]
}

const requestListener = (req, res) => {
    let body;
    let statusCode;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, DELETE");
    switch(req.url){
        case "/":
            body = { message: "Welcome to the jungle" };
            break;
        case "/cats":
            if (req.method === "GET"){
                body = { names: names.allCats }
            }else if(req.method === "DELETE"){
                allCats = [];
                statusCode = 204;
            };
            break;
        case "/dogs":
            if (req.method === "GET"){
                body = { names: names.allDogs }
            }else if(req.method === "DELETE"){
                allDogs = [];
                statusCode = 204;
            };
            break;
        case "/unicorns":
            if (req.method === "GET"){
                body = { names: names.allUnicorns }
            }else if(req.method === "DELETE"){
                allUnicorns = [];
                statusCode = 204;
            };
            break;
        default:
            statusCode = 404;
            body = {error : `Route ${req.url} could not be found`}
            break;
    }
    res.statusCode = statusCode || 200;
    body = body && JSON.stringify(body);
    res.end(body);
}


const server = http.createServer(requestListener);

const startServer = (port, host) => {
    server.listen(port,host, ()=>{
        console.log(`Visit http://${host}:${port} for good stuff`);
    })
}

const closeServer = cb => server.close(cb);

module.exports={ startServer, closeServer }