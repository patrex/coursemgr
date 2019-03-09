exports.getAll = (req, res) => {
    res.send('Hello, student');
}

exports.getOne = (req, res) => {
    res.send("Student: " + req.params.id);
}

exports.create = (req, res) => {
    res.send('Create route hit');
}

exports.getCourses = (req, res) => {
    res.send('Create route hit');
}

exports.create = (req, res) => {
    res.send('Create route hit');
}

exports.removeStudent = (req, res) => {
    res.send('Remove student route hit');
}

exports.addCourse = (req, res) => {
    res.send('Create course route hit');
}

exports.login = (req, res) => {
    res.send('login route hit');
}

exports.deleteCourse = (req, res) => {
    res.send('Delete course route hit');
}
