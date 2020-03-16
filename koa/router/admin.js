const Router = require("koa-router");
let router = new Router();
const Model_Admin = require("../mongoDB/model/example.js");
const { setToken } = require("../config/jwt.js");

/*
 * 注册接口
 */

// router.get("/setAdmin", async (ctx, next) => {
//   const admin = {
//     name: "user",
//     password: "1212"
//   };
//   Model_Admin.create(admin);

//   ctx.body = "1";
// });

/*
 * 登录接口
 */
router.post("/api/admin/login", async (ctx, next) => {
  const admin = ctx.request.body;
  console.log(admin);

  const findOne = await Model_Admin.findOne({ name: admin.username });

  if (findOne && admin.password === findOne.password) {
    ctx.body = {
      status: 1,
      token: setToken(admin.username),
      message: "登录成功" 
    };
  } else {
    ctx.status = 401;
    ctx.body = {
      status: 0,
      token: "",
      message: "用户名或者密码错误" 
    };
  }
});

router.get("/showmethemoney", async (ctx, next) => {
  const admin = [
    {
      name: "test1",
      password: "test1"
    },
    {
      name: "test2",
      password: "test2"
    }
  ];

  ctx.body = admin;
});

module.exports = router;
