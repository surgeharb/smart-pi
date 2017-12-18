let pause = module.exports.pause = () => {
  const { exec } = require('child_process');
  exec(`killall omxplayer.bin`, (error, stdout, stderr) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

/**
 * Plays the desires song path on the device
 * 
 * @param {String} path Path of the song
 */
let play = module.exports.play = path => {
  const { exec } = require('child_process');
  exec(`omxplayer '${path}'`, (error, stdout, stderr) => {
    pause();
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
}