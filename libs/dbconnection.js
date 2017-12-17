const mongodbUri = require('mongodb-uri');

module.exports = async mongoose => {
  mongoose.Promise = global.Promise;

  let log = '';
  const uri = mongodbUri.format({
    'hosts': [{
      'host': process.env.DB_HOST,
      'port': process.env.DB_PORT
    }],
    'database': process.env.DB_NAME
  });

  try {
    await mongoose.connect(uri, { 'useMongoClient': true });
    log = 'Database connected successfully';
  } catch (error) {
    console.log('error', error);
    log = 'Database connection error';
  }

  // if (process.env.NODE_ENV == 'development')
  // mongoose.set('debug', true);

  return log;
};