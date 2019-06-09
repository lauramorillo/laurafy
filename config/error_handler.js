var createError = require('http-errors');

module.exports.handleNotFound = (req, res, next) => {
  next(createError(404));
};

module.exports.handleError = (err, req, res, next) => {
  const message = err.message;
  const error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ message, error });
};
