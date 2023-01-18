// URL基本
// const { URL } = require('url');
// const u = 'https://www.google.com/';
// const url = new URL(u);
// console.log(url.protocol);
// console.log(url.host);

// サーバ作成
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log(
    `
      [${new Date().toISOString()}]
      ${req.method} ${req.url}
      ${req.headers['user-agent']}
    `
  );

  if (req.method === 'POST') {
    req.pipe(res);
  } else {
    const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'));
    reader.pipe(res);
  }
  // res.end(JSON.stringify('Hello World!'));
});
server.listen(3000);

// クライアント（GET）
// const url = 'http://localhost:3000';
// const options = {
//   method: 'GET',
// };
// const req = http.request(url, options, (res) => {
//   res.pipe(process.stdout);
//   console.log('OK');
// });
// req.end();

// クライアント（POST）
const url = 'http://localhost:3000';
const data = 'Hello world!';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data),
  },
};
const req = http.request(url, options, (res) => {
  res.pipe(process.stdout);
});
req.on('error', (err) => {
  console.log(err.message);
});
req.end(data);
