var express = require('express');
var app = express.createServer(express.logger());
var infile = "index.html";

app.get('/', function(request, response) {
  var fs = require('fs');
  var in = fs.readFileSync('index.html', 'utf-8');
  response.send.(in);
  //response.send('Hello World 3 this time!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
