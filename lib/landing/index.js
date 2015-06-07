var express = require('express'),
    path    = require('path'),
    app     = module.exports = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// routes
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
