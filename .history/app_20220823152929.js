const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const today = new Date();
  var currentDay = today.getDate();
  var day = "";
  if (currentDay === 0) {
    day = "Sunday";
  } else if (currentDay === 6) {
    day = "Saturday";
  } else if (currentDay === 5) {
    day = "Friday";
  } else if (currentDay === 4) {
    day = "Thursday";
  } else if (currentDay === 4) {
    day = "Thursday";
  } else if (currentDay === 3) {
    day = "Wednesday";
  } else if (currentDay === 2) {
    day = "Tuesday";
  } else {
    day = "Monday";
  }
  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
