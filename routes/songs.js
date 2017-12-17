// Models
const songs = require('../models/songs');
const users = require('../models/users');

// Utils
const sound = require('../libs/sound');

const CONF = require('../config/config');
const ObjectId = require('mongodb').ObjectID;

module.exports.routes = (api, database) => {

  api.post('/play/song', async(request, response, next) => {
    let song = request.body.songId || ObjectId();

    if (song !== 'alarm' && song !== 'ring') {
      song = await songs.findById(songId).exec();
    
      if (!song) {
        return response.status(400).json({ 'message': 'bad request' });
      }

      CONF.stats.songsToday += 1;
      let user = await users.findOneAndUpdate(
        { username: 'user' },
        { $inc: { 'songsListenedTotal': 1 } },
        { new: true }
      ).exec();

      let newSongTypesCounter = user.songsTypesPlayed;
      newSongTypesCounter[song.type] = newSongTypesCounter[song.type] + 1;

      users.findOneAndUpdate(
        { username: 'user' },
        { $set: { 'songsTypesPlayed': newSongTypesCounter } },
      ).exec();
    } else if (song === 'alarm') {
      song = { 'url': CONF.sound.alarmUrl };
    } else if (song === 'ring') {
      song = { 'url': CONF.sound.ringUrl };
    }

    sound.play(song.url);
    return response.status(200).json({ 'message': 'Success.' });
  });

  api.post('/play/radio', async(request, response, next) => {
    let type = request.body.radioType || 0;
    let songsArray = [];

    if (type === 0) {
      songsArray = []; // recommend music
    } else {
      songsArray = await songs.find({ 'type': type }).lean().exec();
    }

    return response.status(200).json({
      'songs': songsArray,
      'message': 'Success'
    });
  });

}