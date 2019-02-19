var express = require("express");
var app = express();



app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
})

app.get("/campgrounds", function(req, res) {
  var campgrounds = [
    { name: "Salmon Creek", image: "https://t3.ftcdn.net/jpg/00/26/07/72/240_F_26077210_FlERllgMjBOZhofkGec8Pzr66tZjVpBa.jpg"},
    { name: "Granite Hill", image: "https://t3.ftcdn.net/jpg/01/39/96/74/240_F_139967465_IZ0RKkXvEKoGknrkjWxbX7Gyo1DYZbZh.jpg"},
    { name: "Mountain Goat Rest", image: "https://t4.ftcdn.net/jpg/00/28/82/17/240_F_28821783_EuhRdXLzVsV6dm6u0nKTtVXbO4Jka8qe.jpg"}
  ];

  res.render("campgrounds", {campgrounds:campgrounds});
});


app.listen(4000, function() {
  console.log("The YelpCamp Server has started on port 4000...");
});