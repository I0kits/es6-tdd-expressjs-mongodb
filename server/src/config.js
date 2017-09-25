import env from 'getenv'

const conf = {
    port: 3000,
    logLevel: 'debug',
    logColorize: false
};

export default {
    port: env.int('port', conf.port),
    logLevel: env.string('logLevel', conf.logLevel),
    logColorize: env.bool('logColorize', conf.logColorize)
};