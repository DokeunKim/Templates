const fs = require('fs')
module.exports = {
  devServer: {
    disableHostCheck:true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    host: '0.0.0.0', 
    port: 8001
  }
}