class Song {
    constructor(id, properties) {
      this._id = id;
      this._title = properties.title;
      this._length = properties.length;
      this._file = properties.file;
      this._lyrics = properties.lyrics;
    }

    get id() { return this._id }
    get title() { return this._title }
    get length() { return this._length }
    get file() { return this._file }
    get lyrics() { return this._lyrics }
}

module.exports = Song;
