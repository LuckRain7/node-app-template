'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app

  // 路由格式 读取controller下文件中的方法
  // router.get([path],controller.[filename].[functionname])

  router.get('/', controller.home.index)
  router.get('/session', controller.home.sessionTest)
  router.get('/getSession', controller.home.getSession)
  router.get('/loginOut', controller.home.loginOut)
  router.get('/news', controller.news.index)
  router.get('/newscontent', controller.news.content)
  router.post('/add', controller.home.add)
  // 测试为前端提供接口
  router.get('/web/api/login', controller.rest.index)
  router.get('/web/api/:model/:id', controller.rest.getById)
  router.post('/web/api/:model', controller.rest.post)
  router.delete('/web/api/:model/:id', controller.rest.delete)
  router.put('/web/api/:model/:id', controller.rest.put)
}
