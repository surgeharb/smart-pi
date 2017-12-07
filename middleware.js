const jwt = require('jsonwebtoken');
const CONF = require('./config/config');

module.exports = router => {

  // route middleware that will happen on every request
  router.use((request, response, next) => {

    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    if (request.url === '/login') {
      next();
    } else {
      let token = request.headers.authorization.split(' ')[1];
      jwt.verify(token, CONF.secretJWT, (err, decoded) => {
        if (err) {
          response.json({ 'message': 'Invalid Token' });
        } else {
          next();
        }
      });
    }
  });

}