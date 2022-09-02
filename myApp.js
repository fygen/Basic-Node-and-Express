let express = require('express');
let app = express();

console.log("Hello World");

// absolutePath using node global variable __dirname
const htmlPath = __dirname + "/views/index.html"
const cssPath = __dirname + "/public"

// Middleware of css coming from express.static
app.use("/public",express.static(cssPath));

// // app is express object and using get method in path of same directory to make response and requests.

app.get("/", (req, res) => {
     //response.sendFile is a method of when get method is called client receives file from the absolutePath
     res.sendFile(htmlPath);
})

// // when client connects to server if get method called 
// app.get("/",function(req,res){
//      //Then in response we send 'hello express to the page'
//      res.send('Hello Express');
// })


























module.exports = app;
