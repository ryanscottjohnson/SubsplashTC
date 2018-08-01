'use strict';

require('dotenv').config();

const express = require('express');
const router = new express.Router();

// TODO: add other dependencies for rendering content

const Content = require('..models/content.js');

// get route (refine according to API requirements)
router.get('/', (req, res) => {
    if(req.query.id) {
        // name Video needs to be changed according to API requirements
        Video.findOne({_id: req.query.id}, (err, video) => {
            res.send(video);
        });
    } else {
        Video.find()
        .then (video => {
            res.send(video);
        });
    }
});

module.exports = router;