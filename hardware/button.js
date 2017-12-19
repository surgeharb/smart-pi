const CONF = require('../config/config');
const sound = require('../libs/sound');

module.exports = () => {
  // Create a new `button` hardware instance.
  let button = new five.Button(`P1-${CONF.buttonPin}`);

  button.on('hold', () => {
    console.log('Button held');
  });

  button.on('press', () => {
    sound.ring();
    console.log('Button pressed');
  });

  button.on('release', () => {
    console.log('Button released');
  });
}