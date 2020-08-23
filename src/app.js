const express = require('express');
const useragent = require('express-useragent');
const bodyParser = require('body-parser');
const app = express();

app.use(useragent.express());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.raw({ limit: '50mb', extended: true, type: '*/*' }));

app.get('/', (req, res) => {
  res.status(200).send('Muzikayise Flynn Buthelezi (zuluCoda) node rest api');
});

app.get('/helloworld', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/getAgent', (req, res) => {
  res.send(req.useragent.source);
});

require('./features/calculator/route')(app);
require('./features/image-ml/route')(app);

module.exports = app;
