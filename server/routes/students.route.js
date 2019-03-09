import express from 'express';
import ctrl from '../controllers/students.ctrl';

const router = express();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);

router.post('/', ctrl.create);
router.get('/courses', ctrl.getCourses);
router.post('/courses/:id', ctrl.addCourse);
router.post('/login', ctrl.login);
//router.delete('/courses/:id', ctrl.delete);
router.delete('/:id', ctrl.removeStudent);

module.exports = router;
