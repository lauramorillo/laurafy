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
  return `${SERVER_URL}/play/${song.file}`
}

module.exports.getSongs = getSongs
module.exports.getSongUrl = getSongUrl