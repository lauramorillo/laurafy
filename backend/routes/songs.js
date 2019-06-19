const SongService = require('../services/songs');
const SongView = require('./view/song');

module.exports.list = (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 0;
  const pageSize = parseInt(req.query.pageSize) || 10;


  SongService.list(page, pageSize).then(results => {
    const response = { 
      total: results.total, 
      songs: results.songs.map(SongView.transformToListViewItem)
    };
    res.json(response);
  }).catch(next);
};
