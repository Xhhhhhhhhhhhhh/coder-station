const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(createProxyMiddleware(['/res', '/api', '/staticFile'], {
        target: 'http://127.0.0.1:7001',
        changeOrigin : true
    }))
}
