const SongService = require('../services/songs');
const SongView = require('./view/song');
const IncomingForm = require('formidable').IncomingForm;

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

module.exports.upload = (req, res, next) => {
  const form = new IncomingForm()

  form.on('file', (field, file) => {
    SongService.save(file).then(() => res.json()).catch(next);;
  })
  form.parse(req)
};
