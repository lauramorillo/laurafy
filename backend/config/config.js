module.exports.server = { 
  port: process.env.SEVER_PORT || 3000 
};

module.exports.database = { 
  port: process.env.MONGO_PORT || 27017,
  server: process.env.MONGO_SERVER || 'mongo',
  database: process.env.DATABASE || 'laurafy'
};

module.exports.spotify = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
}

module.exports.amazon = {
  bucket: process.env.S3_BUCKET || 'laurafy'
}
