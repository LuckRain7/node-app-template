'use strict';

module.exports = (options, app) => {
  return async function printDate(ctx, next) {
    console.log(options);
    console.log('中间件打印日期', new Date());
    await next();
  };
};

// 使用中间件还要进行配置  配置时名字要与文件名相对应
// config.middleware = ['printdate'];
