// ------------------
// ROUTES
// ------------------
app.get('/testing', function(req, res) {
  // info to provide
  const data = 'testing 123';

  // send info back to client
  res.send(data);
});

app.get('/users', function(req, res) {
  User.find({}, function(error, found) {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.post("/submit", function(req, res) {
  User.create(req.body)
    .then(function(dbUser) {
      res.json(dbUser); 
    })
    .catch(function(err) {
      res.json(err);
    });
});