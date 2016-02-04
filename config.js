'use strict';

var path = require('path');

exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://wotic73jcyy:12345678@ds055565.mongolab.com:55565/my-parse-service'
};

exports.parse = {
  cloud: path.join(__dirname, 'cloud'),
  appId: '123456789',
  masterKey: 'abcdefg',
  fileKey: 'myFileKey',
  masterKey: 'mySecretMasterKey',
  clientKey: 'myClientKey',
  restAPIKey: '9d676c364a11d96b8c67e69bf7bbfb82',
  javascriptKey: 'myJavascriptKey',
  dotNetKey: 'myDotNetKey',
};