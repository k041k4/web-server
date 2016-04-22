var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.requireAuthentication, function(request, response) {
  response.send('About Us!!');
});

app.listen(PORT, function () {
  console.log('Express Started on port ' + PORT);
});
