'use strict';

const jws = require('jsonwebtoken');

function bearerAuth(req, res, next) {
    if (!req.headers.authorization) {
        res.status(401);
        res.send('Not authorized');
        res.end();
        return;
    }
    var authHeader = req.headers.authorization;
    var token = authHeader.split('Bearer ')[1];
    jws.verify(token, process.env.APP_SECRET, (err, decoded) => {
        if (err) {
            return next(err);
        }
    });
}

module.exports = bearerAuth;