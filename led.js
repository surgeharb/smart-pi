const five = require('johnny-five');
const Raspi = require('raspi-io');
const board = new five.Board({
  io: new Raspi()
});

board.on('ready', () => {

  // Create a new `led` hardware instance.
  let led = new five.Led('P1-13');
  led.blink();

});