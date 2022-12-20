const PROXY_CONFIG = [
    {
        context: ['/api_lg'],
        target: 'http://150.150.251.243:3000/',
        secure: false,
        pathRewrite: { '^/api_lg': ''}
    },
    {
        context: ['/mock_api'],
        target: 'http://192.168.100.106:3000/',
        secure: false,
        pathRewrite: { '^/mock_api': ''}
    }
]

module.exports = PROXY_CONFIG
