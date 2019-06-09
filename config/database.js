const mongoose = require('mongoose');

module.exports.connect = (config) => {
  const connection = `mongodb://${config.server}:${config.port}/${config.database}`;
  return mongoose.connect(connection, { keepAlive: true, keepAliveInitialDelay: 300000 });
};
