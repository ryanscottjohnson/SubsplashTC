'use strict';

const jws = require('jsonwebtoken');
const verifyToken = require('./verifyToken.js');


// TODO: incorporate verifyToken funciton into bearerAuth
function bearerAuth(req, res, next) {
    console.log('bearer function working');
    let authHeader = req.get('Authorization');
    var token = authHeader.split('Bearer ')[1];
    console.log('token', token);

    // jws.verify(token, process.env.SECRET, (err, decoded) => {
    //     if (err) {
    //         return next(err);
    //     }
    // });
};

module.exports = bearerAuth;