class Song {
    constructor(properties) {
      this._key = properties.key
      this._artist = properties.artist
      this._title = properties.title;
      this._length = properties.length;
    }

    get key() { return this._key }
    get artist() { return this._artist }
    get title() { return this._title }
    get length() { return this._length }
    get file() { return `${this._key}.mp3` }
    get url() { return `https://laurafy.s3.eu-west-3.amazonaws.com/${this.file}`}
}

module.exports = Song;
