const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  const today = new Date();
  var currentDay = today.getDate();
  if (currentDay === 6 || currentDay === 0) {
    res.send("Yay it's weekend");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
