'use strict';

require('dotenv').config('express');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());



app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
});