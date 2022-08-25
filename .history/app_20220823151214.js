const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const today = new Date();
  var currentDay = today.getDate();
  var day = "";
  if (currentDay === 6 || currentDay === 0) {
    day = "weekend";
    res.render("list", { kindOfDay: day });
  } else {
    day = "weekday";
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});