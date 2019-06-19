module.exports.server = { 
  port: process.env.SEVER_PORT || 3000 
};

module.exports.database = { 
  port: process.env.MONGO_PORT || 27017,
  server: process.env.MONGO_SERVER || 'mongo',
  database: process.env.DATABASE || 'laurafy'
};
