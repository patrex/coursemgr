'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index.route');

var _index2 = _interopRequireDefault(_index);

var _students = require('./routes/students.route');

var _students2 = _interopRequireDefault(_students);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _swaggerDoc = require('../config/swaggerDoc.json');

var _swaggerDoc2 = _interopRequireDefault(_swaggerDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import path from 'path';
var app = (0, _express2.default)();

//set view engine
// app.set('views', path.join(__dirname, '../views'));
// app.set('view engine', 'pug');

//json and bodyparsing
//app.use(express.json());
//app.use(express.static(path.join(__dirname, 'puplic')));

app.use('/home', _index2.default);
app.use('/api-docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swaggerDoc2.default, { explorer: true }));
app.use('/students', _students2.default);

//in the wild
app.get('*', function (req, res) {
    res.status(400).send('You are in the wild');
});

module.exports = app;