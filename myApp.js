let bodyParser = require("body-parser");
let express = require('express');
require('dotenv').config();

let app = express();

console.log("Hello World");

/*  absolutePath using node global variable __dirname */
const htmlPath = __dirname + "/views/index.html"
const cssPath = __dirname + "/public"
const obje = { "message": "Hello json" };

/*  For every request write to the server console which method: get post delete , which path requested localhost:3000/ , .../json and which ip requested those..  */
app.use(function (req, res, next) {
     console.log(`${req.method} ${req.path} - ${req.ip}`)
     next();
})

/*  Middleware of css coming from express.static */
app.use("/public", express.static(cssPath));

/* Adding a middleware for reaching the html form data */
app.use(bodyParser.urlencoded({ extended: false }));

/*  when client enters url on main "localhost:3000/" he sees index.html and gets css of index.html with static file expression above */
app.get("/", (req, res) => {
     // so here server sends index.html with res.sendFile method.
     res.sendFile(htmlPath);
})

/*  when client enters the url of "localhost:3000/json" he sees the json object which can be manipulated. */
app.get("/json", (req, res) => {
     // response is obje turned into a json format for sending
     console.log(process.env.MESSAGE_STYLE);
     process.env.MESSAGE_STYLE == "uppercase" ?
          obje.message = obje.message.toUpperCase() : null;
     res.json(obje);
})

/*  client GET /now */
/*  chaining middleWares for learning purposes like if user permitted to interact with something  */
app.get('/now', (req, res, next) => {
     req.time = new Date().toString();
     next();
}, (req, res) => {
     res.json({ "time": req.time });
})

/*  This get method is useful for getting the variable of the :word from client which is a parameter then send it back json format. */
app.get('/:word/echo', (req, res, next) => {
     res.json({ "echo": req.params.word });
})

/* This get method uses this convention .../name?first=firstname&last=lastname the data can be reached using req.query object */
// app.get("/name", (req, res, next)=>{
//      res.json({
//           "name": `${req.query.first} ${req.query.last}` 
//      })
// })

/* This overrides the previous method by using route we dont have to specify app.post(path,handler) again we can use chained functions */
app.route("/name")
     .get((req, res, next) => {
          /* a get method of a html url with query gives us this values specified at url like .../name?first=firstname&last=lastname */
          res.json({
               "name": `${req.query.first} ${req.query.last}`
          });
     }).post((req, res) => { 
          /* when a post method of a input inside the body of the page has name tag of first (name=first) and a name tag of last and an action of /name gives us the req.body values */
          res.json({
               "name": `${req.body.first} ${req.body.last}`
          })
     })

/* when client connects to server if get method called  */
// app.get("/",function(req,res){
//      /* Then in response we send 'hello express to the page' */
//      res.send('Hello Express');
// })


























module.exports = app;
