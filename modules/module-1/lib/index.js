const http = require('request-promise-native')

module.exports = () => http.get('https://google.com', { resolveWithFullResponse: true })
    .then(response => response.statusCode)
    .then(console.log)
