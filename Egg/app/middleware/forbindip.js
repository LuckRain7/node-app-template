'use strict';

module.exports = (options, app) => {
  return async function forbidIP(ctx, next) {
    //   屏蔽ip
    const FORBIDIP = '127.0.0.1';
    if (ctx.request.ip == FORBIDIP) {
      ctx.status = 403;
      ctx.body = 'ip已经被屏蔽';
    } else {
      await next();
    }

  };
};
