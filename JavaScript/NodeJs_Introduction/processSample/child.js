// setTimeout(() => {
//   console.log('Hello World!');
//   process.send({ hello: 'message from child.' });
// }, 3000);

process.on('message', (data) => {
  console.log(data);
  process.exit(0);
});
