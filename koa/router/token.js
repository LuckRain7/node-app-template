module.exports = async (ctx, next) => {
  console.log(1111);

    if (ctx.header && ctx.header.authorization) {
      console.log(ctx.header.authorization);
      console.log('has');
      await next();
    }else{
      ctx.throw(401,'ssssssssss')
    }
  
};
