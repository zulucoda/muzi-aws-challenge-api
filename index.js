const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/app.js');
const server = awsServerlessExpress.createServer(app);


module.exports.server = (event, context) => awsServerlessExpress.proxy(server, event, context);