'use strict';

// 可以引入第三方模块
const dayjs = require('dayjs');
// app/extend/helper.js
module.exports = {
  foo(param) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
  },
  formatTime(param) {
    //   格式化日期
    return dayjs(param * 1000)
      .format('YYYY-M-D  hh:mm:ss');

    //   同样可以在模板中使用
    //   <%=helper.formatTime(list[i].dateline)%>
  },

};
// 在 controller 中使用 this.ctx.helper.方法名
