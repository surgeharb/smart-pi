const CONF = require('../config/config');

module.exports = five => {
  // Create a new `led` hardware instance.
  let led = new five.Led(`${CONF.ledsPin}`);
  CONF.ledController = led;
  console.log('led', led);
  console.log('CONF.ledController', CONF.ledController);
}