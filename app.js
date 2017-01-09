var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var dateformat = require('dateformat')

var index = require('./routes/index');
var fridaymeetings = require('./routes/fridaymeetings');
// var nominations = require('./routes/nominations')(knex);
//
// var awardcategorys = require('./routes/awardcategorys')(knex);
// var locations = require('./routes/locations')(knex);
// var persons = require('./routes/persons')(knex);
//
// var admins = require('./routes/admins')(knex);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

hbs.registerHelper('openingRow', idx => (idx + 2) % 2 == 0);
hbs.registerHelper('closingRow', idx => (idx + 1) % 2 == 0);
hbs.registerHelper('dateformat', date => dateformat(date, 'longDate'));
hbs.registerHelper('pastDate', date => Date.now() > new Date(date));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/fridaymeetings', fridaymeetings);
// app.use('/nominations', nominations);
//
// app.use('/awardcategorys', awardcategorys);
// app.use('/locations', locations);
// app.use('/persons', persons);
//
// app.use('/admins', admins);

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
