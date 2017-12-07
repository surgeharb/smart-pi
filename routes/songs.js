// Models
const songs = require('../models/songs');

// Utils
const sound = require('../libs/sound');

const ObjectId = require('mongodb').ObjectID;

module.exports.routes = (api, database) => {

  api.post('/play', (request, response, next) => {
    let songId = request.body.songId || ObjectId();
    let song = await songs.findById(songId).exec();

    if (!song) {
      return response.status(400).json({ 'message': 'bad request' });
    }

    sound.play(song.url);
    return response.status(200).json({ 'message': 'Success' });
  });

}