const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('../routes/routes');
const ErrorHandler = require('./error_handler')

module.exports.start = () => {
  const app = express();

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/play', express.static(path.join(__dirname, '../songs')));
  app.use('/', indexRouter);

  app.use(ErrorHandler.handleNotFound);
  app.use(ErrorHandler.handleError);

  app.listen(3000)
}