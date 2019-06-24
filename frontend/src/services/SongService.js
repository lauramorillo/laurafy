const SERVER_URL = 'http://localhost:3000'

function getSongs(page, pageSize, handleRetrievedData) {
  return fetch(`${SERVER_URL}/songs?page=${page}&pageSize=${pageSize}`)
  .then(response => response.json())
  .then(response => {
    return { songs: response.songs, total: response.total}
  })
  .then(response => handleRetrievedData(response))
  .catch(response => console.log('ERROR: ', response));
}

function getSongUrl(song) {
  return song.url
}

function uploadSongUrl() {
  return `${SERVER_URL}/upload`
}

module.exports.getSongs = getSongs
module.exports.getSongUrl = getSongUrl
module.exports.uploadSongUrl = uploadSongUrl