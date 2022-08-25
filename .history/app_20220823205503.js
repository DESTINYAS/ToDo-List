const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, new: item });
});
app.post("/", function (req, res) {
  var item = req.body.newItem;
  res.render.redirect("/");
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
