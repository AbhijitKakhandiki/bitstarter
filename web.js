var express = require('express');
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var in = fs.readFileSync('./index.html','utf8');
  response.end.(in.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
