var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose")


mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//   name: "Granite Hill",
//   image: "https://t3.ftcdn.net/jpg/01/39/96/74/240_F_139967465_IZ0RKkXvEKoGknrkjWxbX7Gyo1DYZbZh.jpg"
// },
//   function(err, campground) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAMPGROUND");
//       console.log(campground)
//     }
//   });



// Restful Routes
app.get("/", function(req, res) {
  res.render("landing");
})

app.get("/campgrounds", function(req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds", { campgrounds:allCampgrounds });
    }
  });
});

// Make the new campground
app.post("/campgrounds", function(req, res) {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  //Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
        // redirect back to campgrounds
        res.redirect("/campgrounds")
    }
  });
});

// Shows the form
app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});










app.listen(4000, function() {
  console.log("The YelpCamp Server has started on port 4000...");
});