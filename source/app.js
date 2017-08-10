const fetch = require('node-fetch');
const config = require('./config/config');

const waitForSitefinityInit = (response) => {

  console.log("Fetching status for: " + config.sitefinityUrl);
  
  fetch(config.sitefinityUrl).then((res) => {
    if (res.status === 200) {
      console.log("Ready!");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end(config.sitefinityUrl + ' is ready.');
    }
    else {
      console.log("Not ready! Timeout...");
      //setTimeout(() => { waitForSitefinityInit(response); }, config.pollingTimeout);
    }
  }).catch((error) => {
      response.statusCode = 500;
      response.end();
  });
}

module.exports = {
  waitForSitefinityInit: waitForSitefinityInit
}; 