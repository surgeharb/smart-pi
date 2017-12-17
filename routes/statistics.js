const listenings = ('../models/listenings');
const CONF = require('../config/config');

module.exports.routes = (api, database) => {

  api.post('/statistics', async(request, response, next) => {

    let results = await listenings
      .aggregate()
      .match()
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