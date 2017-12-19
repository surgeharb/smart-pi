const CONF = require('../config/config');

module.exports = five => {
  // Create a new `led` hardware instance.
  let led = new five.Led(`P1-${CONF.ledsPin}`);
  console.log('led:', led);
  led.blink();
}