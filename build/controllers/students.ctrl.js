'use strict';

exports.getAll = function (req, res) {
    res.send('Hello, student');
};

exports.getOne = function (req, res) {
    res.send(req.params.id);
};