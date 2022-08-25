const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newListItems: items });
});
app.post("/", function (req, res) {
  var item = req.body.newItem;
  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work", function (req, res) {
  res.render("list", { listTitles: "Work List", newListItems: "workItems" });
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
