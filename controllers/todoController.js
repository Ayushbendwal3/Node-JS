var bodyparser = require("body-parser");

//Dummy Model
var data = [
  { item: "get Milk" },
  { item: "Do Homework" },
  { item: "Run errands" },
];
var urlencodedParser = bodyparser.urlencoded({ extended: false });
module.exports = function (app) {
  // Home/index page
  app.get("/", function (req, res) {
    res.render("index");
  });
  // todo get page
  app.get("/todo", function (req, res) {
    res.render("todo", { todos: data });
  });
  app.post("/todo", urlencodedParser, function (req, res) {
    data.push(req.body);
  });
  app.delete("/todo/:item", function (req, res) {
    data.filter(function (todo) {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
};
