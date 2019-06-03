var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
  title:  String,
  file: String,
  length:   Number
});

var Song = mongoose.model('Song', songSchema);

module.exports.list = (page, pageSize) => {
  const recordsToSkip = (page - 1) * pageSize
  return Song.find({}).skip(recordsToSkip).limit(pageSize)
}