const SERVER_URL = 'http://localhost:3000'

function getSongs(page, pageSize, handleRetrievedData) {
  let url = this.baseURL + "/getData";
  return fetch(`${SERVER_URL}/songs?page=${page}&pageSize=${pageSize}`)
  .then(response => response.json())
  .then(response => {
    const pages = Math.ceil(parseFloat(response.total) / parseFloat(pageSize))
    return { pages: pages, songs: response.songs}
  })
  .then(response => handleRetrievedData(response))
  .catch(response => console.log('ERROR: ', response));
}

function getSongUrl(song) {
  return `${SERVER_URL}/play/${song.file}`
}

module.exports.getSongs = getSongs
module.exports.getSongUrl = getSongUrl