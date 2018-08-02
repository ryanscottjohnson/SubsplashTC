'use strict';

let jws = require('jsonwebtoken');

function bearerAuth(req, res, next) {
    console.log('bearer function working');
    var authHeader = req.headers.authorization;
    var token = authHeader.split('Bearer ')[1];
    console.log('token', token);

    jws.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            res.send('forbidden');
            return;
        }
    });
};

module.exports = { bearerAuth };