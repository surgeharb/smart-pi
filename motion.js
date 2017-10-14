const five = require('johnny-five');
const Raspi = require('raspi-io');
const board = new five.Board({
  io: new Raspi()
});

board.on('ready', function() {

  // Create a new `motion` hardware instance.
  let motion = new five.IR.Motion('P1-13');

  // 'calibrated' occurs once, at the beginning of a session,
  motion.on('calibrated', () => {
    console.log('calibrated', Date.now());
  });

  // 'motionstart' events are fired when the 'calibrated'
  // proximal area is disrupted, generally by some form of movement
  motion.on('motionstart', () => {
    console.log('motionstart', Date.now());
  });

  // 'motionend' events are fired following a 'motionstart' event
  // when no movement has occurred in X ms
  motion.on('motionend', () => {
    console.log('motionend', Date.now());
  });
});