//Requires
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var routes = require('./routes/index');
var logger = require('morgan');
var bodyParser = require('body-parser');

//Initialization
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

//Routing
app.get('/', routes);


//Server
var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Polling App listening at http://%s:%s', host, port);
});