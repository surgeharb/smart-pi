const CONF = require('../config/config');
const sound = require('../libs/sound');

module.exports = five => {
  // Create a new `button` hardware instance.
  let button = new five.Button(`P1-${CONF.buttonPin}`);
  console.log('btn:', button);

  button.on('hold', function() {
    console.log('Button held');
  });

  button.on('press', function() {
    sound.ring();
    console.log('Button pressed');
  });

  button.on('release', function() {
    console.log('Button released');
  });
}