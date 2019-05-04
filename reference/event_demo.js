const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

myEmitter.emit('event');

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called listener:', data));

// logger.log('Hello world');