'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 5000 || process.env.PORT;
_app2.default.listen(port, function () {
    console.log('App running at localhost:' + port);
});