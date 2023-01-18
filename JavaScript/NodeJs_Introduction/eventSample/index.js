const EventEmitter = require('events');
const ee = new EventEmitter();

// const handleTick = function () {
//   console.log('event is fired');
// };

// ee.once('event', handleTick);

// ee.emit('event');
// ee.emit('event');

// ee.on('event', function () {
//   console.log('function : \r\n', this);
// });

// ee.on('event', () => {
//   console.log('arrow : \r\n', this);
// });

// ee.emit('event');

ee.on('event', () => {
  console.log('event 1st');
});
ee.on('event', () => {
  console.log('event 2nd');
});
ee.on('event', () => {
  console.log('event 3rd');
});

ee.emit('event');
