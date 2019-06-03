var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/songs');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/play', express.static(path.join(__dirname, 'songs')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // Only providing error in development
  const message = err.message;
  const error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ message, error });
});

module.exports = app;
