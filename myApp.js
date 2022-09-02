let express = require('express');
let app = express();

console.log("Hello World");

// absolutePath using node global variable __dirname
const absolutePath = __dirname + "/views/index.html"

// app is express object and using get method in path of same directory to make response and requests.
app.get("/", (req, res) => {
     //response.sendFile is a method of when get method is called client receives file from the absolutePath
     res.sendFile(absolutePath)
})

// // when client connects to server if get method called 
// app.get("/",function(req,res){
//      //Then in response we send 'hello express to the page'
//      res.send('Hello Express');
// })


























module.exports = app;
