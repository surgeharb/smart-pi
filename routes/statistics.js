const listenings = require('../models/listenings');
const users = require('../models/users');
const CONF = require('../config/config');

module.exports.routes = (api, database) => {

  api.get('/profile', async (request, response, next) => {
    let user = await users.findOne({ username: 'user' }).exec();

    let topGenre;
    let maxIndex = 0;
    let maxPlayed = 0;
    let allUserPlays = user.songsTypesPlayed;
    
    allUserPlays.forEach((playsCount, index) => {
      if (playsCount > maxPlayed) {
        maxPlayed = playsCount;
        maxIndex = index;
      }
    });

    if (maxIndex === 0) {
      topGenre = 'NONE';
    } else {
      topGenre = CONF.songsTypes[maxIndex];
    }

    return response.status(200).json({
      'topGenre': topGenre,
      'todayCount': CONF.stats.songsToday || 0,
      'totalCount': user.songsListenedTotal || 0
    });
  });

  api.get('/statistics', async(request, response, next) => {

    let results = await listenings
      .aggregate()
      .match({ userId: 'user' })
      .sort({ dayOfTheMonth: -1 })
      .project({
        'type': 1,
        'length': 1,
        'dayOfTheMonth': 1
      }).group({
        '_id': {
          day: '$dayOfTheMonth',
          type: '$type'
        },
        'count': {
          $sum: 1
        },
        'totalLength': {
          $sum: '$length'
        }
      })
      .exec();
    
    return response.status(200).json({
      'stats': results
    });

  });
}