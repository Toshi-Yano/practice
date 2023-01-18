const path = require('path');
const fs = require('fs');
const util = require('util');

// パス基本操作
// const filepath = 'C:\\\\fileOperation\\index.html';

// console.log(path.dirname(filepath));
// console.log(path.basename(filepath));
// console.log(path.extname(filepath));

// console.log(path.join('C:\\sample', 'index.html'));

// console.log(path.normalize('C:\\\\sample\\lib\\..\\index.html'));

// ファイル読み書き（同期）
// const data = fs.readFileSync(path.join(__dirname, 'sample.txt'), 'utf-8');
// fs.writeFileSync(path.join(__dirname, 'sample-copy.txt'), data, 'utf-8');

// ファイル読み書き（非同期）
// fs.readFile(path.join(__dirname, 'sample.txt'), 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }

//   fs.writeFile(
//     path.join(__dirname, 'sample-copy.txt'),
//     data,
//     'utf-8',
//     (err) => {
//       if (err) {
//         console.log(err.message);
//         return;
//       }
//       console.log('OK');
//     }
//   );
// });

// ファイル読み書き（promise使用）
// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

// readFile(path.join(__dirname, 'sample.txt'), 'utf-8')
//   .then((data) => {
//     return writeFile(path.join(__dirname, 'sample-copy.txt'), data, 'utf-8');
//   })
//   .then((data) => {
//     console.log('OOOOOKKKKKK');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// ファイル読み書き（async/await使用）
// (async function () {
//   try {
//     const data = await readFile(path.join(__dirname, 'sample.txt'), 'utf-8');
//     await writeFile(path.join(__dirname, 'sample-copy.txt'), data, 'utf-8');
//     console.log('OK');
//   } catch (error) {
//     console.log(err.message);
//   }
// })();

// ストリーム（読み込み）
// let data = '';

// const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf-8');
// reader.on('data', (chunk) => {
//   data += chunk;
// });
// reader.on('end', () => {
//   console.log(data);
// });

// reader.resume;

// ストリーム（書き込み）
// const writer = fs.createWriteStream(
//   path.join(__dirname, 'createdSample.txt'),
//   'utf-8'
// );
// writer.end('Hello World!');

// ストリーム（パイプ）
// const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf-8');
// const writer = fs.createWriteStream(
//   path.join(__dirname, 'sample-copy.txt'),
//   'utf-8'
// );

// reader.pipe(writer);
// reader.resume();

// カスタムストリーム（読み込み）
// const CustomReader = require('./customReader');
// const reader = new CustomReader();
// reader.on('data', (chunk) => {
//   console.log(chunk);
// });

// reader.resume();

// カスタムストリーム（書き込み）
// const CustomReader = require('./customReader');
// const CustomWriter = require('./customWriter');

// const reader = new CustomReader();
// const writer = new CustomWriter();

// reader.pipe(writer);
// reader.resume();

// エンコード
const iconv = require('iconv-lite');

// fs.readFile(path.join(__dirname, 'sampleJapanese.txt'), (err, data) => {
//   console.log(iconv.decode(data, 'shiftjis'));
// });

// fs.writeFile(
//   path.join(__dirname, 'test.txt'),
//   iconv.encode('こんにちは', 'shiftjis'),
//   (err) => {
//     console.log('OK');
//   }
// );

const reader = fs.createReadStream(path.join(__dirname, 'sampleJapanese.txt'));
const decoder = iconv.decodeStream('shiftjis');
const encoder = iconv.encodeStream('shiftjis');
// reader.pipe(decoder);
// decoder.on('data', (chunk) => {
//   console.log(chunk);
// });
// reader.resume();

const writer = fs.createWriteStream(path.join(__dirname, 'text.txt'));
encoder.pipe(writer);
encoder.write('こんにちはこんにちは');
encoder.end();
