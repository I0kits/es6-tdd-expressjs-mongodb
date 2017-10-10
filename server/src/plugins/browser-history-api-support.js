import path from 'path';
import fp from 'fastify-plugin';
import fastifyStatic from 'fastify-static';
import fastifyAccepts from 'fastify-accepts';

function browserHistoryApiSupportPlugin(fastify, options, next){
  fastify.register(fastifyAccepts, err =>{
    if (err) return next(err);

    const root = options.path || path.join(__dirname, '../../../www');
    fastify.logger.debug('the www dir path: %s', root);

    fastify.register(fastifyStatic, {root}, err => {
      if (err) return next(err);

      fastify.use((req, res, next2)=> {
        //console.log(".......>%s", req.type('html'))
        console.log(".......>%s", res.sendFile);
        console.log(res)
        next2()
      });

      next();
    });
  });

}

export default fp(browserHistoryApiSupportPlugin);
