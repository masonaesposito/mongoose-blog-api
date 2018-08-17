const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://heroku_6640ws0w:964o845ptrges8rood4fs0t84h@ds123532.mlab.com:23532/heroku_6640ws0w', { useMongoClient: true });
mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.status(200).send();
});

app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'))
module.exports = app;