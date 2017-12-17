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
      .match()
      .sort({ 'date': -1 })
      .project({
        'length': 1,
        'type': 1,
        'day': {
          $dayOfMonth: '$time'
        }
      }).group({
        '_id': {
          day: '$day',
          type: '$type'
        },
        'count': {
          $sum: 1
        },
        'totalLength': {
          $sum: '$length'
        }
      })
      .lean().exec();
    
    return response.status(200).json({
      'stats': results
    });

  });
}