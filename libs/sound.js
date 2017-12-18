/**
 * Plays the desires song path on the device
 * 
 * @param {String} path Path of the song
 */
let play = module.exports.play = path => {
  const { exec } = require('child_process');
  exec(`npm restart`, (error, stdout, stderr) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
    console.log(stdout);
  });
}