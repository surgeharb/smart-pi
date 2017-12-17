const listenings = require('../models/listenings');
const users = require('../models/users');
const CONF = require('../config/config');

module.exports.routes = (api, database) => {

  api.get('/profile', async (request, response, next) => {
    let user = await users.findOne({ username: 'user' }).lean().exec();
    return response.status(200).json({
      'todayCount': CONF.stats.songsToday || 0,
      'totalCount': user.songsListenedTotal || 0
    });
  });

  api.get('/statistics', async(request, response, next) => {

    let results = await listenings
      .aggregate()
      .match({ userId: 'user' })
      .sort({ date: -1 })
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