const express = require('express');
const router = express.Router();
const SongRepository = require('../repositories/songs'); 

function toSongView(song) {
  return {
    id: song._id,
    title: song.title,
    length: song.length,
    file: song.file
  }
}

router.get('/songs', function(req, res, next) {
  const page = parseInt(req.query.page, 10) || 1
  const pageSize = parseInt(req.query.pageSize) || 10

  SongRepository.list(page, pageSize).then(results => {
    res.json(results.map(toSongView))
  }).catch(next)
});

module.exports = router;
