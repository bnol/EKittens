var express = require('express');
var app = express();

//Set public directory
app.use(express.static(__dirname + '/public'));

//Show default stuff
app.get('/', function(req, res) {
  res.render('/index.html');
});


module.exports = app;
