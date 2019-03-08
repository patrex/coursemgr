'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _students = require('../controllers/students.ctrl');

var _students2 = _interopRequireDefault(_students);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

router.get('/', _students2.default.getAll);
router.get('/:id', _students2.default.getOne);

module.exports = router;