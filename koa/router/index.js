const Router = require('koa-router')
let router = new Router()
// const { AddPeople, getPeople } = require('../controller/People')



router.get('/', async (ctx, next) => {
    ctx.body = 'hello world'
})

router.post('/api/:model', async (ctx, next) => {
    const MODEL = ctx.params.model,
        data = ctx.request.body;
    const model = require(`../mongoDB/model/${MODEL}`)
    const r = model.create(data)
    ctx.body = 1;
})

router.get('/api/:model', async (ctx, next) => {
    const MODEL = ctx.params.model;
    const model = require(`../mongoDB/model/${MODEL}`);
    const r = await model.find();
    ctx.body = r;
})

// 精确查询
router.get('/api/query/:model/:title/:value', async (ctx, next) => {
    const { model, title, value } = ctx.params
    const Model = require(`../mongoDB/model/${model}`);
    let query = {};
    query[`${title}`] = value
    const r = await Model.find(query);
    ctx.body = r;

})

router.put('/api/:model', async (ctx, next) => {
    const MODEL = ctx.params.model,
        data = ctx.request.body;
    const model = require(`../mongoDB/model/${MODEL}`)
    const r = await model.findByIdAndUpdate(data._id, data)
    ctx.body = 1
})

router.delete('/api/:model/:id', async (ctx, next) => {
    const { model, id } = ctx.params,
        Model = require(`../mongoDB/model/${model}`);
    await Model.findByIdAndDelete(id)
    ctx.body = 1
})

// 完成任务和未完成任务 聚合数据
router.get('/api/merge/:model', async (ctx, next) => {
    const MODEL = ctx.params.model;
    const model = require(`../mongoDB/model/${MODEL}`);
    const r = await model.find().populate("project").populate("score");
    ctx.body = r;
}) 


module.exports = router