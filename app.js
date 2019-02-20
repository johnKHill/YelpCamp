var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  { name: "Salmon Creek", image: "https://t3.ftcdn.net/jpg/00/26/07/72/240_F_26077210_FlERllgMjBOZhofkGec8Pzr66tZjVpBa.jpg" },
  { name: "Granite Hill", image: "https://t3.ftcdn.net/jpg/01/39/96/74/240_F_139967465_IZ0RKkXvEKoGknrkjWxbX7Gyo1DYZbZh.jpg" },
  { name: "Mountain Goat Rest", image: "https://t4.ftcdn.net/jpg/00/28/82/17/240_F_28821783_EuhRdXLzVsV6dm6u0nKTtVXbO4Jka8qe.jpg" },

  { name: "Salmon Creek", image: "https://t3.ftcdn.net/jpg/00/26/07/72/240_F_26077210_FlERllgMjBOZhofkGec8Pzr66tZjVpBa.jpg" },
  { name: "Granite Hill", image: "https://t3.ftcdn.net/jpg/01/39/96/74/240_F_139967465_IZ0RKkXvEKoGknrkjWxbX7Gyo1DYZbZh.jpg" },
  { name: "Mountain Goat Rest", image: "https://t4.ftcdn.net/jpg/00/28/82/17/240_F_28821783_EuhRdXLzVsV6dm6u0nKTtVXbO4Jka8qe.jpg" },

  { name: "Salmon Creek", image: "https://t3.ftcdn.net/jpg/00/26/07/72/240_F_26077210_FlERllgMjBOZhofkGec8Pzr66tZjVpBa.jpg" },
  { name: "Granite Hill", image: "https://t3.ftcdn.net/jpg/01/39/96/74/240_F_139967465_IZ0RKkXvEKoGknrkjWxbX7Gyo1DYZbZh.jpg" },
  { name: "Mountain Goat Rest", image: "https://t4.ftcdn.net/jpg/00/28/82/17/240_F_28821783_EuhRdXLzVsV6dm6u0nKTtVXbO4Jka8qe.jpg" }
];





// Restful Routes
app.get("/", function(req, res) {
  res.render("landing");
})

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", { campgrounds:campgrounds });
});

// Make the new campground
app.post("/campgrounds", function(req, res) {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image }
  campgrounds.push(newCampground);

  //redirect back to campgrounds page
  res.redirect("/campgrounds");

});

// Shows the form
app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});










app.listen(4000, function() {
  console.log("The YelpCamp Server has started on port 4000...");
});