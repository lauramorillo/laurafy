const SongService = require('../services/songs');
const SongView = require('./view/song');

module.exports.list = (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1
  const pageSize = parseInt(req.query.pageSize) || 10


  SongService.list(page, pageSize).then(results => {
    res.json(results.map(SongView.transformToListViewItem))
  }).catch(next)
};
