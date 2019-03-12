'use strict';

exports.getAll = function (req, res) {
    res.send('Hello, student');
};

exports.getOne = function (req, res) {
    res.send("Student: " + req.params.id);
};

exports.create = function (req, res) {
    res.send('Create route hit');
};

exports.getCourses = function (req, res) {
    res.send('Create route hit');
};

exports.create = function (req, res) {
    res.send('Create route hit');
};

exports.removeStudent = function (req, res) {
    res.send('Remove student route hit');
};

exports.addCourse = function (req, res) {
    res.send('Create course route hit');
};

exports.login = function (req, res) {
    res.send('login route hit');
};

exports.deleteCourse = function (req, res) {
    res.send('Delete course route hit');
};