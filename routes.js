var meteorRequire = require('@webantic/meteor-deps').get

var WebApp = meteorRequire('WebApp')

WebApp.connectHandlers.use('/test', function (req, res, next) {
  res.end('This endpoint was added by an npm module!')
})
