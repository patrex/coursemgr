'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _students = require('../controllers/students.ctrl');

var _students2 = _interopRequireDefault(_students);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

router.get('/', _students2.default.getAll);
router.get('/:id', _students2.default.getOne);

router.post('/', _students2.default.create);
router.get('/courses', _students2.default.getCourses);
router.post('/courses/:id', _students2.default.addCourse);
router.post('/login', _students2.default.login);
//router.delete('/courses/:id', ctrl.delete);
router.delete('/:id', _students2.default.removeStudent);

module.exports = router;