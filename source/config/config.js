'use strict'

const config = {  
  port: process.env.PORT || 8080,
  sitefinityUrl: process.env.initSitefinityUrl || 'http://localhost/',
  pollingTimeout: process.env.pollingTimeout || 10000
}

module.exports = config;