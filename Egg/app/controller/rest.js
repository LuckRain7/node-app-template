'use strict';

const Controller = require('egg').Controller;

class RestController extends Controller {
  async index() {
    this.ctx.body = '欢迎使用 rest';
  }
  async get() {
    this.ctx.body = '收到get请求';
  }
  async getById() {
    //   解析id model
    const ID = this.ctx.params.id;
    const MODEL = this.ctx.params.model;

    this.ctx.body = {
      请求的模型: MODEL,
      请求的id: ID,
    };
  }
  async post() {
    console.log(this.ctx.request.body);
  }
  async delete() {
    console.log(this.ctx.request.body);
  }
  async put() {
    console.log(this.ctx.request.body);
  }
}

module.exports = RestController;

