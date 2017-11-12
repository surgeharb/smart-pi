const { exec } = require('child_process');
exec('omxplayer sounds/sheyfak.ogg', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});