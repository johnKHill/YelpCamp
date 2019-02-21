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
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Granite Hill",
//     image: "https://t4.ftcdn.net/jpg/01/29/23/51/240_F_129235127_S4R15bEiRt6fFvY9oPguaSWTCGceFNAY.jpg",
//     description: "This is a hige granite hill, no bathrooms. No water. Beautiful granite!"
//   },
//   function(err, campground) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAMPGROUND: ");
//       console.log(campground);
//     }
//   });


// RESTFUL ROUTES
app.get("/", function(req, res) {
  res.render("landing");
})

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { campgrounds:allCampgrounds });
    }
  });
});

// CREATE - add new campground to DB
app.post("/campgrounds", function(req, res) {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = { name: name, image: image, description: desc };
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

// NEW - show form to create a new campground
app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
  // find campground with provided ID
  Campground.findById(req.params.id, function(err, foundCampground) {
    if (err){
      console.log(err);
    } else {
      // render show template with that campground
      res.render("show", { campground: foundCampground });
    }
  });
  req.params.id
});








app.listen(4000, function() {
  console.log("The YelpCamp Server has started on port 4000...");
});