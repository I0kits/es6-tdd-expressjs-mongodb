import fs from 'fs';
import morgan from 'morgan';
import rfs from 'rotating-file-stream';

import config from '../config';

// make sure log dir ready
fs.existsSync(config.logPath) || fs.mkdirSync(config.logPath);
const stream = rfs('access.log', {interval: '1d', path: config.logPath});

export default {
  create: () =>{
    return morgan('combined', {stream});
  },
};
