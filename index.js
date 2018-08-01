'use strict';

require('dotenv').config('express');

const express = require('express');
const app = express();
app.use(express.static('static'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const mongoose = require('mongoose');
// MongoClient.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
// // mongoose.connect('mongodb://localhost:3000', { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI);

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

console.log('working');

app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
});