'use strict';

const mongoose = require('mongoose');

let contentSchema = new mongoose.Schema({
    id: String,
    title: String,
    duration: Number,
    youtupe_url: Number,
    reach: Number,
    published_at: String,
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;