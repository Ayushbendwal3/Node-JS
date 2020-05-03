var express = require("express");
var todoController = require("./controllers/todoController");
var app = express();

//Setting up Template Engine
app.set("view engine", "ejs");

//Static files
app.use(express.static("./public"));

//Launching Controller
todoController(app);
app.listen(3000);
