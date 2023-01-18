const { Writable } = require('stream');

class CustomWriter extends Writable {
  constructor(options) {
    super(options || { decodeString: true });
  }

  _write(chunk, encoding, done) {
    const text =
      encoding === 'buffer'
        ? chunk.toString(this._writableState.defaultEncoding)
        : chunk;
    try {
      console.log(text);
      console.log('end');
    } catch (error) {
      done(error);
      return;
    }
    done();
  }
}

module.exports = CustomWriter;
