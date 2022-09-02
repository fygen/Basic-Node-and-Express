let express = require('express');
let app = express();

console.log("Hello World");

// absolutePath using node global variable __dirname
const htmlPath = __dirname + "/views/index.html"
const cssPath = __dirname + "/public"
const obje = {"message": "Hello json"};

// Middleware of css coming from express.static
app.use("/public",express.static(cssPath));

// when client enters url on main "localhost:3000/" he sees index.html and gets css of index.html with static file expression above
app.get("/", (req, res) => {
     // so here server sends index.html with res.sendFile method.
     res.sendFile(htmlPath);
})

// when client enters the url of "localhost:3000/json" he sees the json object which can be manipulated.
app.get("/json",(req,res)=>{
     // response is obje turned into a json format for sending
     res.json(obje);
})

// // when client connects to server if get method called 
// app.get("/",function(req,res){
//      //Then in response we send 'hello express to the page'
//      res.send('Hello Express');
// })


























module.exports = app;
