const express = require('express');
const useragent = require('express-useragent');
const app = express();

app.use(useragent.express());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.status(200).send('Muzikayise Flynn Buthelezi (zuluCoda) node rest api');
});

app.get('/helloworld', (req, res) => {
    res.status(200).send('Hello World');
});

module.exports = app;
