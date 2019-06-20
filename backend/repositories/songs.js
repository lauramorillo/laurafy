const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SongModel = require('../models/song');

const songSchema = new Schema({
  _id: String,
  title:  String,
  artist: String,
  length: Number
});

const Song = mongoose.model('Song', songSchema);

module.exports.list = async (page, pageSize) => {
  const recordsToSkip = page * pageSize;
  const songs = await Song.find({}).skip(recordsToSkip).limit(pageSize)
  return songs.map(databaseSong => {
    return transformToModel(databaseSong)
  });
}

module.exports.total = async () => {
  return Song.countDocuments();
}

module.exports.save = async (song) => {
  const objectToSave = transformToDatabase(song);
  return Song.updateOne({ _id: objectToSave._id }, objectToSave, { upsert: true })
}

function transformToDatabase(song) {
  return {
    _id: song.key,
    title:  song.title,
    artist: song.artist,
    length: song.length
  }
}

function transformToModel(databaseSong) {
  const newSongObject = {
    key: databaseSong._id,
    title:  databaseSong.title,
    artist: databaseSong.artist,
    length: databaseSong.length
  };
  return new SongModel(newSongObject);
}