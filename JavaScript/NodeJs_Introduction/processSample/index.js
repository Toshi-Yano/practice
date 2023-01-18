const { fork } = require('child_process');
const path = require('path');
const child = fork(path.join(__dirname, 'child.js'), { execArgv: [] });

// 子から親
// child.on('close', (code) => {
//   console.log(`child process exit with code ${code}`);
// });

// child.on('message', (data) => {
//   console.log(data);
// });
// child.on('close', (code) => {
//   console.log(`child process exit with code ${code}`);
// });

// 親から子
child.send({ hello: 'message from parent.' });
child.on('close', (code) => {
  console.log(`child process exit with code ${code}`);
});
