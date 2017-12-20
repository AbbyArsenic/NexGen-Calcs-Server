// DEPENDENCIES
const express = require('express');
const app = express();
const jwt = require('express-jwt');
const rsaValidation = require('auth0-api-jwt-rsa-validation');

// ROUTES
app.get('/testing', function(req, res) {
  // info to provide
  const data = 'testing 123';

  // send info back to client
  res.send(data);
});

// SERVER LISTENING
app.listen(8080);