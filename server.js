//Requires
var express = require('express');


//Initialization
var app = express();





//Server
var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Polling App listening at http://%s:%s', host, port);
});