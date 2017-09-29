import mongoose from 'mongoose';
import logger from '../utils/logger';

mongoose.Promise = global.Promise;

const wrap = {
  init: (hosts, name, user, pass, params, opts = {}) => {
    const option = {
      user, pass,
      useMongoClient: true,
      promiseLibrary: global.Promise,
      ...opts
    };

    const uri = `mongodb://${hosts}/${name}?${params}`;
    logger.info('try to connecting mongodb: %s with %j', uri, option);

    mongoose.connect(uri, option).then(() => {
      logger.info('mongodb connected, ready to persist your data.');
    }, (err) => {
      logger.error('');
    });


    return wrap;
  },

  disconnect: (cb) => {

  }
};