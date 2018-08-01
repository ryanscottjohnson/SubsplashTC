'use strict';

require('dotenv').config('express');

const express = require('express');
const app = express();
app.use(express.static('static'));

console.log('hello world!')

app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
});