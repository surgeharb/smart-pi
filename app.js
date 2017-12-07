/**
 * Load environment variables
 */
const fs = require('fs');
require('dotenv').config();
const CONF = require('./config/config');

const express = require('express');
const api = express.Router();
const path = require('path');
const app = express();

const host = 'Server running at :' + process.env.PORT;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.json());

/**
 * Listen to a given port
 */
app.listen(process.env.PORT, () => {
  console.log(host);
});

/**
 * Connect to the database
 */
require('./libs/dbconnection')(mongoose).then(async log => {
  console.log(log);
}).catch(log => {
  console.log(log);
});

/**
 * Middlwares
 */
const middleware = require('./middleware')(api);
app.use('/api', api);

/**
 * Get Routes
 */
fs.readdirSync('./routes').forEach(file => {
  if (file.substr(-3) == '.js') {
    routeGroup = require('./routes/' + file);
    routeGroup.routes(api, mongoose);
  }
});

/**
 * Catch 404 and forward to error handler
 */
app.use((request, response, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Error handler
 */
app.use((err, request, response, next) => {

  // set locals, only providing error in development
  response.locals.message = process.env.NODE_ENV === 'development' ? err.message : 'something bad happened :(';
  response.locals.error = process.env.NODE_ENV === 'development' ? err : {};

  if (!err.status || err.status === 500) {
    G.saveLog('mainThread', err, true);
  }

  // send error message
  response.status(err.status || 500).json({ 'message': response.locals.message, 'error': response.locals.error });

});