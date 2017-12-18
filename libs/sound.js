const omx = require('omx-layers');

const player = new omx({
  'disableKeys': true,
  'audioOutput': 'local',
  'blackBackground': true,
  'disableOnScreenDisplay': true
});

/**
 * Stop the current song on the device
 */
let stop = module.exports.stop = path => {
  player.stop();
}

/**
 * Plays the desires song path on the device
 * 
 * @param {String} path Path of the song
 */
let play = module.exports.play = path => {
  stop() && player.open(path, () => {
    console.log('playback finished!');
  });
}