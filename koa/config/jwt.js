const Jwt = require("jsonwebtoken");
const KoaJwt = require("koa-jwt");

const privateKey = "privateKey";

const setToken = name => {
  return Jwt.sign(
    {
      data: { name: name }, // 用户信息数据
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5 // 过期时间
    },
    privateKey
  );
};

const verifyToken = KoaJwt({
  secret: privateKey
}).unless({
  path: [
    /^\/api\/admin\/login/,
    /^\/api\/register/,
    /^\/web\/api/,
    /^\/showmethemoney/
  ]
});

module.exports = {
  setToken,
  verifyToken
};
