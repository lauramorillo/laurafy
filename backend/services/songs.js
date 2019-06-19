const SongRepository = require('../repositories/songs')

module.exports.list = async (pageNumber, pageSize)  => {
  const songs = await SongRepository.list(pageNumber, pageSize)
  const total = await SongRepository.total()
  return { songs, total }
} 