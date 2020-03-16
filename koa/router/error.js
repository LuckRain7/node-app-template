// 处理 401
module.exports = function(ctx, next) {
  return next().catch(err => {
    if (401 == err.status) {
      ctx.body = "Hi Body, who are you ";
    } else {
      throw err;
    }
  });
};
