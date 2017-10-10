import mongoose from 'mongoose';
import logger from '../utils/logger';

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  logger.info('Mongoose get connection successfully.');
});

mongoose.connection.on('error', (err) => {
  logger.error('Mongoose get connection error: %o', err);
});

mongoose.connection.on('disconnected', () => {
  logger.info('Mongoose mongodb connection disconnected.');
});


const wrap = {
  init: (hosts, name, user, pass, params, opts = {}) => {
    const uri = `mongodb://${hosts}/${name}?${params}`;
    const option = {
      user, pass,
      useMongoClient: true,
      promiseLibrary: mongoose.Promise,
      ...opts,
    };

    logger.info('Connecting to mongodb: %s', uri);
    mongoose.connect(uri, option);
    return wrap;
  },

  disconnect: (cb) => {
    mongoose.disconnect(cb);
  },
};

export default wrap;
