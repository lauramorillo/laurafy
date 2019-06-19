const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SongModel = require('../models/song');

const songSchema = new Schema({
  title:  String,
  file: String,
  length: Number,
  lyrics: String
});

const Song = mongoose.model('Song', songSchema);

module.exports.list = async (page, pageSize) => {
  const recordsToSkip = (page - 1) * pageSize;
  const songs = await Song.find({}).skip(recordsToSkip).limit(pageSize)
  return songs.map(song => new SongModel(song._id, song));
}

module.exports.total = async () => {
  return Song.count();
}