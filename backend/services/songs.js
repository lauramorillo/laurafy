const SongRepository = require('../repositories/songs');
const Amazon = require('../providers/amazon');
const Spotify = require('../providers/spotify');

module.exports.list = async (pageNumber, pageSize)  => {
  const songs = await SongRepository.list(pageNumber, pageSize)
  const total = await SongRepository.total()
  return { songs, total }
} 

module.exports.save = async (file) => {
  const songKey = getFileName(file.name);
  await Amazon.uploadFile(file);
  const song = await Spotify.getSongMetadata(songKey);
  return SongRepository.save(song);
}

function getFileName(fileWithExtension) {
  return fileWithExtension.replace(/\.[^/.]+$/, "");
}