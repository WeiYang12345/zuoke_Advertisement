const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/index', {
    target: 'http://api.zuokexiangchun.com',
    pathRewrite: {
      "^/index": "/"
    }
  }))
}