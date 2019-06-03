const express = require('express');
const router = express.Router();
const SongRepository = require('../repositories/songs'); 

function toSongView(song) {
  return {
    id: song._id,
    title: song.title,
    length: song.length
  }
}

router.get('/songs', function(req, res, next) {
  const page = parseInt(req.query.page, 10) || 1
  const pageSize = parseInt(req.query.pageSize) || 10

  SongRepository.list(page, pageSize).then(results => {
    res.json(results.map(toSongView))
  }).catch(err => {
    res.status(500);
    res.json({ message: err.message, error: err });
  })
});

module.exports = router;
