module.exports = function (max = 10) {
  const data = [];
  const original = '01234567890abcdefghijklmnopqrestuvwxyz';
  const len = original.length;
  for (let i = 0; i < max; i++) {
    data[i] = original[Math.floor(Math.random() * len)];
  }
  return data.join('');
};
