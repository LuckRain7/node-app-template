'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 获取新闻数据
    const URL = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';
    // curl方法可以获取远程的数据 egg自己给封装的
    const response = await this.ctx.curl(URL);
    const data = JSON.parse(response.data);
    return data.result;
  }
  async getNewsContent(aid) {
    const URL = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    const response = await this.ctx.curl(URL);
    const data = JSON.parse(response.data);
    return data.result[0];
  }
}

module.exports = NewsService;
