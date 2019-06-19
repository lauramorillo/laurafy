const SongRepository = require('../repositories/songs')

module.exports.list = (pageNumber, pageSize)  => {
  return SongRepository.list(pageNumber, pageSize)
} 