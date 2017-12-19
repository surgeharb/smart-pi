const five = require('johnny-five');
const CONF = require('../config/config');

module.exports = board => {
  // Create a new `led` hardware instance.
  let led = new five.Led(`P1-${CONF.ledsPin}`);
  led.blink();
}