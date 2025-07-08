let http = require("http"); // Node.js ka built-in http module import kia 

let server = http.createServer((req, res) => { //server create kia or server varibale main complete server hai ab
   if (req.url === "/") { //api route 1
        res.end("Home Page");
    } else if (req.url === "/about") { //api route 2
        res.end("About Page");
    } else if (req.url === "/contact") { //api route 3
        res.end("Contact Page");
    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen("8000"); // http://localhost:8000 and ye Server is port 8000 pr listen kar raha hai
