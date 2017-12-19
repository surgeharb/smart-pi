const jwt = require('jsonwebtoken');
const users = require('./models/users');
const CONF = require('./config/config');

module.exports = router => {

  // route middleware that will happen on every request
  router.use(async(request, response, next) => {

    console.log(`${request.method} ${request.url}`);

    if (process.env.NODE_ENV === 'development' || request.url === '/login') {
      return next();
    } else {
      let token = request.headers.authorization.split(' ')[1];
      jwt.verify(token, CONF.secretJWT, async(err, decoded) => {
        if (err) {
          response.json({ 'message': 'Invalid Token' });
        } else {
          request.body.preFetched = {
            'user': await users.findOne({ username: 'user' }).lean().exec()
          };

          return next();
        }
      });
    }

  });

}