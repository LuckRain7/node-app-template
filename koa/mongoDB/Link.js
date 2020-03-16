module.exports = app => {
  const mongoose = require('mongoose')

  const URL = 'mongodb://user:password@localhost:27017/test'

  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.on('connected', function() {
    console.log('Mongoose connection open to ' + URL)
  })

  /**
   * 连接异常 error 数据库连接错误
   */
  mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err)
  })

  /**
   * 连接断开 disconnected 连接异常断开
   */
  mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection disconnected')
  })
}
