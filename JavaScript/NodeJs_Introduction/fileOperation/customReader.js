const { Readable } = require('stream');
const randomString = require('./randomString');
const data = randomString(100000);

class CustomReader extends Readable {
  constructor(options) {
    super(options || { encoding: 'utf-8' });
    this._current = 0;
  }

  _read(size) {
    const start = this._current;
    const end = start + size < data.length ? start + size : data.length;
    let chunk;

    try {
      console.log('@@@@@@@@@@@@@@@@@@');
      chunk = data.slice(start, end);
    } catch (error) {
      process.nextTick(() => {
        this.emit('error', error);
      });
      return;
    }

    this.push(chunk);

    if (start + size < data.length) {
      this._current = end;
    } else {
      this.push(null);
    }
  }
}

module.exports = CustomReader;
