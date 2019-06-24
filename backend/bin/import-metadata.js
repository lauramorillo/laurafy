const Spotify = require('../providers/spotify');
const SonsgRepository = require('../repositories/songs');
const Song = require('../models/song');
const Database = require('../config/database');
const Config = require('../config/config');

const songs = ["frozen_let_it_go", "queen_bohemian_rhapsody", "survivor_eye_of_the_tiger"];

function requestAllSongs(token) {
  const songsRequests = []
  songs.forEach(song => {
    const songPromise = Spotify.getSongMetadata(song, token)
      .catch(err => {
        console.log('ERR: ', err);
        return new Song({ key: song })
      })
    songsRequests.push(songPromise);
  });

  return Promise.all(songsRequests);
}

Database.connect(Config.database)
.then(() => Spotify.authenticate(Config.spotify))
.then(tokenResponse => tokenResponse.access_token)
.then(requestAllSongs)
.then(responsesSongObjects => 
  Promise.all(responsesSongObjects.map(songObject => SonsgRepository.save(songObject)))
)
.then(promises => {
  console.log('Metadata updated for available songs')
  process.exit(0)
})
.catch(err => {
  console.log('Err: ', err);
  process.exit(-1);
})