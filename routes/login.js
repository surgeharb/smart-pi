const CONF = require('../config/config');

module.exports.routes = (api, database) => {

  api.post('/login', (request, response, next) => {
    let token = '';
    let req = request.body;
    let verification = false;

    if (!req.username || !req.password) {
      return response.status(400).json({ 'message': 'bad request' });
    }

    if (req.username === 'user' && req.password === 'pass') {
      verification = true;
    }

    if (verification) {
      token = jwt.sign({ username: 'user' }, CONF.secretJWT);
      return response.status(200).json({ 'message': 'Success', 'token': token });
    }

    return response.status(401).json({ 'message': 'Bad Credentials', 'token': token });
  });
}