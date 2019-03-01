'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//set view engine
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'pug');

//json and bodyparsing
app.use(_express2.default.json());
app.use(_express2.default.static(_path2.default.join(__dirname, 'puplic')));

app.use('/', _index2.default);

//in the wild
app.get('*', function (req, res) {
    res.status(400).send('You are in the wild');
});

module.exports = app;