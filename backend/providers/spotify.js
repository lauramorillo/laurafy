const request = require('request-promise');
const Song = require('../models/song');
const config = require('../config/config').spotify;

module.exports.authenticate = () => {
  const data = `${config.clientId}:${config.clientSecret}`;  
  const buff = Buffer.from(data);  
  const base64data = buff.toString('base64');
  return request({
    uri: "https://accounts.spotify.com/api/token",
    method: "post",
    headers: { 
      Authorization: `Basic ${base64data}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    qs: {
      grant_type: "client_credentials"
    },
    json: true
  });
}

module.exports.getSongMetadata = async (song, tokenAuth) => {
  let token = tokenAuth;
  if (!tokenAuth) {
    const tokenResponse = await this.authenticate();
    token = tokenResponse.access_token;
  }

  const songSearchTerm = song.replace(/_/g, " ");
  return request({
    uri: "https://api.spotify.com/v1/search",
    method: "get",
    headers: { 
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    qs: { q: songSearchTerm, type: "track", limit: 1 },
    json: true
  })
  .then( response => transformToModel(song, response.tracks.items));
}

function transformToModel(key, data) {
  const songObject = { key }
  if (data && data.length > 0) {
    const responseData = data[0]
    songObject.artist = getArtists(responseData)
    songObject.title = responseData.name;
    songObject.length = responseData.duration_ms / 1000;
  }
  return new Song(songObject);
}

function getArtists(responseData) {
  return responseData.artists.map(artist => artist.name).join(', ');
}