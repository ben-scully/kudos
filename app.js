var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var index = require('./routes/index');
var awardcategorys = require('./routes/awardcategorys');
var locations = require('./routes/locations');
var persons = require('./routes/persons');
var awards = require('./routes/awards');
var nominations = require('./routes/nominations');
var winners = require('./routes/winners');
var fridaymeetings = require('./routes/fridaymeetings');
var admins = require('./routes/admins');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

hbs.registerHelper('testy', idx => 1);

hbs.registerHelper('openingRow', idx => (idx + 2) % 2 == 0);
hbs.registerHelper('closingRow', idx => (idx + 1) % 2 == 0);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/awardcategorys', awardcategorys);
app.use('/locations', locations);
app.use('/persons', persons);
app.use('/awards', awards);
app.use('/nominations', nominations);
app.use('/winners', winners);
app.use('/fridaymeetings', fridaymeetings);
app.use('/admins', admins);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
