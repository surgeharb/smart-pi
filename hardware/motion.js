const five = require('johnny-five');
const Raspi = require('raspi-io');
const board = new five.Board({
  io: new Raspi()
});

board.on('ready', () => {

  // Create a new `motion` hardware instance.
  let motion = new five.Motion('P1-7');

  // 'calibrated' occurs once, at the beginning of a session,
  motion.on('calibrated', () => {
    console.log('calibrated', Date.now());
  });

  // 'motionstart' events are fired when the 'calibrated'
  // proximal area is disrupted, generally by some form of movement
  motion.on('motionstart', () => {
    console.log('motionstart', Date.now());
    const { exec } = require('child_process');
    const child = exec('omxplayer sounds/sheyfak.ogg', (error, stdout, stderr) => {
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
  });

  // 'motionend' events are fired following a 'motionstart' event
  // when no movement has occurred in X ms
  motion.on('motionend', () => {
    console.log('motionend', Date.now());
  });
});