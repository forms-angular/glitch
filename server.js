console.log("Server.js starting");
var mongoose = require('mongoose');
var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var formsAngular = require('forms-angular');
var app = express();

app.use(bodyParser.json());

// Connect to database
// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname, details set in .env
var uri = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.MONGOPORT+'/'+process.env.DB;

mongoose.connect(uri, {});

// Set up forms-angular
var DataFormHandler = new (formsAngular)(mongoose, app, { urlPrefix: '/api/' });
// Load the models from the models folder
var modelsPath = path.join(__dirname, 'models');
fs.readdirSync(modelsPath).forEach(function (file) {
  var fname = modelsPath + '/' + file;
  if (fs.statSync(fname).isFile()) {
    DataFormHandler.newResource(require(fname));
    }
  });

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(process.env.PORT);
console.log("Listening on port: " + process.env.PORT);