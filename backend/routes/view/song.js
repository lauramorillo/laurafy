module.exports.transformToListViewItem = (song) => {
  return {
    title: song.title,
    length: song.length,
    artist: song.artist,
    file: song.file,
    url: song.url
  };
};