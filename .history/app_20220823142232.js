const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  const today = new Date();
  if (today.getDate() === 6 || today.getDate === 0) {
    res.send("Yay it's weekend");
  } else {
    res.send("Its a working day");
  }
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});