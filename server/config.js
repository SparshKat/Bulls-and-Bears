const config = {
  DEPLOY: process.env.BNB_ENV,
};

switch (config.DEPLOY) {

  case 'localhost': config.SERVER_URL = 'http://localhost:8080',
    config.SECRETS = require('./secrets.json')

    break
  default:

    config.SERVER_URL = 'http://localhost:8080',
      config.SECRETS = require('./secrets-sample.json')

    break
}

module.exports = config;
