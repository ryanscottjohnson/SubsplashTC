'use strict';

const mongoose = require('mongoose');

// TODO: check API for specifics on content Schema tags
const contentSchema = new mongoose.Schema({
    title: String,
    duration: Number,
    URL: String,
    reach: Number
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;