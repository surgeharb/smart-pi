const { exec } = require('child_process');
const CONF = require('../config/config');
const sound = require('../libs/sound');
const five = require('johnny-five');

module.exports = () => {
  console.log(`P1-${CONF.motionPin}`);
  // Create a new `motion` hardware instance.
  let motion = new five.Motion(`P1-${CONF.motionPin}`);

  // 'calibrated' occurs once, at the beginning of a session,
  motion.on('calibrated', () => {
    console.log('calibrated', Date.now());
  });

  // 'motionstart' events are fired when the 'calibrated'
  // proximal area is disrupted, generally by some form of movement
  motion.on('motionstart', () => {
    console.log('motionstart', Date.now());

    sound.ring() && console.log('should ring the bell');
  });

  // 'motionend' events are fired following a 'motionstart' event
  // when no movement has occurred in X ms
  motion.on('motionend', () => {
    console.log('motionend', Date.now());
  });
}