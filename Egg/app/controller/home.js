'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    // 调用extend里面的扩展的application
    this.app.foo();

    // 调用extend里边的扩展ctx
    console.log('ip', this.ctx.getIp());

    // 设置cookie 1:cookie的名字 2:cookie的值 3:cookie的配置
    // 可以设置多个cookie
    this.ctx.cookies.set('username', 'zhangsan', {
      maxAge: 1000 * 3600 * 24, // 设置存储时间
      httpOnly: true, // 默认就是 true
      encrypt: true, // 加密传输
      signed: true, // 对cookie进行签名 防止用户修改cookie
    });

    // this.ctx.csrf 用户访问这个页面的时候传递这个秘钥
    // await this.ctx.render('home.html', {
    //   csrf: this.ctx.csrf,
    // });
    // 配置全局变量后 无需再进行传值了
    await this.ctx.render('home.html');
  }
  async add() {
    // 接收post获取的数据  需要csrf验证
    this.ctx.body = this.ctx.request.body;
  }
  async loginOut() {
    // 将cookie设置为空 就为删除cookie
    this.ctx.cookies.set('username', null);
  }
  async sessionTest() {
    // session的配置要在配置文件中进行配置
    this.ctx.session.username = 'zhangsan';
    await this.ctx.render('home.html');
  }
  async getSession() {
    const userName = this.ctx.session;
    this.ctx.body = userName;
  }
}

module.exports = HomeController;
