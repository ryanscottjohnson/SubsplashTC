'use strict';

require('dotenv').config('express');

const express = require('express');
const superAgent = require('superagent');
// Do I really need mongoose??
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');
const bearerAuth = require('./library/bearer-auth.js');

// MongoClient.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost:3000', { useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api', bearerAuth, (req, res) => {
    console.log('GOT');
    const url = `https://challenge.subsplash.net`;
    superAgent.get(url)
    .then(function (result){
        res.send(result.body);
        // res.sendFile('index.html');
    })
    .catch(result => console.error('error', result.status, result.headers, result.body))
});

app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
});