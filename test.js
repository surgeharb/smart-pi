const { exec } = require('child_process');
exec('omxplayer sounds/sheyfak.ogg', (error, stdout, stderr) => {
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});