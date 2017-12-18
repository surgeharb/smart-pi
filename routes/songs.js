// Models
const songs = require('../models/songs');
const users = require('../models/users');
const listenings = require('../models/listenings');

// Utils
const sound = require('../libs/sound');

const CONF = require('../config/config');
const ObjectId = require('mongodb').ObjectID;

module.exports.routes = (api, database) => {

  api.post('/pause', async(request, response, next) => {
    sound.pause();
    return response.status(200).json({ 'message': 'Success.' });
  });

  api.post('/play/song', async(request, response, next) => {
    let song = request.body.songId || ObjectId();

    if (song !== 'alarm' && song !== 'ring') {
      try {
        song = await songs.findById(song).lean().exec();
      } catch (error) {
        return next(error);
      }
      if (!song) {
        return response.status(400).json({ 'message': 'bad request' });
      }

      CONF.stats.songsToday += 1;
      let user = await users.findOneAndUpdate({ username: 'user' }, { $inc: { 'songsListenedTotal': 1 } }, { new: true }).exec();

      let newSongTypesCounter = user.songsTypesPlayed;
      newSongTypesCounter[song.type] = newSongTypesCounter[song.type] + 1;

      users.findOneAndUpdate({ username: 'user' }, { $set: { 'songsTypesPlayed': newSongTypesCounter } }, ).exec();

      delete song._id;
      song.dayOfTheMonth = new Date().getUTCDate() || 1;

      await listenings.create(song);
    } else if (song === 'alarm') {
      song = { 'url': CONF.sound.alarmUrl };
    } else if (song === 'ring') {
      song = { 'url': CONF.sound.ringUrl };
    }

    sound.play(song.url);
    return response.status(200).json({ 'message': 'Success.' });
  });

  api.post('/play/radio', async (request, response, next) => {
    let type = request.body.radioType || 0;
    let songsArray = [];

    if (type === 0) {
      let maxIndex = 0;
      let maxPlayed = 0;

      let user = await users.findOne({ username: 'user' }).exec();
      let allUserPlays = user.songsTypesPlayed;
      
      allUserPlays.forEach((playsCount, index) => {
        if (playsCount > maxPlayed) {
          maxPlayed = playsCount;
          maxIndex = index;
        }
      });
  
      if (maxIndex === 0) {
        maxIndex = 8;
      }

      songsArray = await songs.find({ 'type': maxIndex }).lean().exec();
    } else {
      songsArray = await songs.find({ 'type': type }).lean().exec();
    }

    return response.status(200).json({
      'songs': songsArray,
      'message': 'Success'
    });
  });

}