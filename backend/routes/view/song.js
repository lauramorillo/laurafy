module.exports.transformToListViewItem = (song) => {
  return {
    id: song.id,
    title: song.title,
    length: song.length,
    file: song.file
  };
};