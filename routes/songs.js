// Models
const songs = require('../models/songs');

// Utils
const sound = require('../libs/sound');

const CONF = require('../config/config');
const ObjectId = require('mongodb').ObjectID;

module.exports.routes = (api, database) => {

  api.post('/play/song', (request, response, next) => {
    let song = request.body.songId || ObjectId();

    if (song !== 'alarm' && song !== 'ring') {
      song = await songs.findById(songId).exec();
    } else if(song === 'alarm') {
      song = CONF.sound.alarmUrl;
    } else if (song === 'ring') {
      song = CONF.sound.ringUrl;
    }

    if (!song) {
      return response.status(400).json({ 'message': 'bad request' });
    }

    sound.play(song.url);
    return response.status(200).json({ 'message': 'Success' });
  });

  api.post('/play/radio', (request, response, next) => {
    let type = request.body.radioType || 0;
    let songsArray = [];

    if (type === 0) {
      songsArray = []; // recommend music
    } else {
      songsArray = await songs.find({ 'type': type }).exec();
    }

    return response.status(200).json({
      'songs': songsArray,
      'message': 'Success'
    });
  });

}