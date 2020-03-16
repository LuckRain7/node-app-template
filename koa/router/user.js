const Router = require("koa-router");
let router = new Router();

const People = require(`../mongoDB/model/People`);
const Project = require(`../mongoDB/model/Project`);
const Task = require(`../mongoDB/model/Task`);

const Score = require(`../mongoDB/model/Score`);
let ScoreData = [];
Score.find({}, function(err, data) {
  ScoreData = data;
});

// 精确查询
router.get("/web/api/query/Task/:title/:value", async (ctx, next) => {
  const { model, title, value } = ctx.params;

  let query = {};
  query[`${title}`] = value;
  const r = await Task.find(query).populate("project").populate("score");
  ctx.body = r;
});

router.get("/web/api/get/People", async (ctx, next) => {
  const r = await People.find();
  ctx.body = r;
});

router.get("/web/api/get/Project", async (ctx, next) => {
  const r = await Project.find();
  ctx.body = r;
});

module.exports = router;
