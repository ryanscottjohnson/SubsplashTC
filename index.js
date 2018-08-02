'use strict';

require('dotenv').config('express');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bearerAuth = require('./library/bearer-auth.js');

// MongoClient.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost:3000', { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api', (req, res) => {
    // res.json('index.html');
    res.json({
        message: 'Welsome to the API'
    });
});

app.post('/api/posts', (req, res) => {
    res.json({
        message: 'Post created...'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
});