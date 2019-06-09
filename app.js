const Config = require('./config/config');
const Database = require('./config/database');
const Server = require('./config/server');

Database.connect(Config.database)
  .then(Server.start(Config.database))
  .catch(err => console.log('Error: ', err));
  