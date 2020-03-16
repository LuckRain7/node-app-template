const Koa = require("koa");
const Cors = require("koa-cors");
const logger = require("koa-logger");
const KoaBody = require("koa-body");

// 路径组件
const router = require("./router/index.js");
const routerAdmin = require("./router/admin.js");
const routerUser = require("./router/user.js");

const MongoDB = require("./mongoDB/Link.js");

const { verifyToken } = require("./config/jwt.js");

const app = new Koa();


app.use(require("./router/error.js"));// 处理错误路由
app.use(KoaBody());
app.use(logger());// 日志
app.use(require("koa-static")(__dirname + "/public"));// 静态文件

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(Cors());//跨域
// MongoDB(app);// 链接数据库


app.use(routerUser.routes()).use(routerUser.allowedMethods());// 用户前端路由
app.use(verifyToken);// jwt校验拦截
app.use(router.routes()).use(router.allowedMethods());// 启动路由
app.use(routerAdmin.routes()).use(routerAdmin.allowedMethods());// 管理员路由

// 监听端口
app.listen(4000, function() {
  console.log("run in 4000");
});
