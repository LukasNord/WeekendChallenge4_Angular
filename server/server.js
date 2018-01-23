
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));








app.listen(port, function (req, res) {
  console.log('Listening on port', port);
});


