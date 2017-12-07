let play = module.exports.play = path => {
  const { exec } = require('child_process');
  exec(`omxplayer ${path}`, (error, stdout, stderr) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
}