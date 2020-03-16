const express = require('express') // 引入express模块
const createError = require('http-errors')
const path = require('path') // 引入path模块,该模块包括了一些处理文件路径的功能
const cookieParser = require('cookie-parser') // cookie操作中间件
const logger = require('morgan') // HTTP请求日志中间件
const bodyParser = require('body-parser') //body-parser插件用于post参数的解析，最常用的是其中的json和urlencoded的parser，可分别对以JSON格式的post参数和urlencoded的post参数进行解析，均可获得一个JSON化的req.body

// 自定义路由模块的引用
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

// 创建一个 Express 应用
const app = express()

// 模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev')) //日志设置，使用参见https://github.com/expressjs/morgan

// 可以进行选择使用
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json()) //解析JSON格式的post参数
app.use(bodyParser.urlencoded({ extended: false })) //解析urlencoeded编码的post参数，URLEncoded编码中,所有的字符均为ANSCII码

app.use(cookieParser()) //cookie设置
app.use(express.static(path.join(__dirname, 'public'))) //静态文件

// 自定义路由模块的引用
app.use('/', indexRouter)
app.use('/users', usersRouter)

// 捕捉404错误并进行错误处理
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // 开发环境错误处理
  res.locals.message = err.message

  
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
