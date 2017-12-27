// ------------------
// DEPENDENCIES
// ------------------
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");

const PORT = (process.env.PORT || 8080);

const User = require("./userModel.js");
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nexgencalc";

// Middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Database configuration
mongoose.Promise = Promise; 
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// ------------------
// ROUTES
// ------------------

app.get('/users', function(req, res) {
  User.find({}, function(error, found) {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.get('/login', function(req, res) {

});

app.post("/register", function(req, res) {
  User.create(req.body)
    .then(function(dbUser) {
      res.json(dbUser); 
    })
    .catch(function(err) {
      res.json(err);
    });
});


// SERVER LISTENING
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
});