'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    // 获取cookie
    const userInfo = this.ctx.cookies.get('username', {
      signed: true, // 获取加密的cookie也需要这个参数
    });
    console.log('获取到的cookie：', userInfo);

    const list = await this.service.news.getNewsList();
    await this.ctx.render('news/news.html', {
      list,
    });

  }
  async list() {
    const ctx = this.ctx;
    // 调用服务里边的方法  操作数据在service中
    const dataList = await this.service.news.getNewsList();
    // console.log(ctx.params);// 获取动态路由传值
    await ctx.render('./../view/news/list.html', dataList);
  }
  async content() {
    //  获取get传值
    const aid = this.ctx.query.aid;
    const content = await this.service.news.getNewsContent(aid);
    // this.ctx.body = content;
    await this.ctx.render('./../view/news/newscontent.html', {
      content,
    });
  }
}

module.exports = NewsController;
