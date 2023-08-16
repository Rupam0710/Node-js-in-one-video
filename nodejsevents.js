const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('Waterfull', () => {
  console.log('Please turn off the water!');
  setTimeout(() => {
      console.log('Please turn off the water! Its a gentle reminder' );    
  }, 3000);
});

// console.log('The script is running');
// console.log('The script is still running');

myEmitter.emit('Waterfull');