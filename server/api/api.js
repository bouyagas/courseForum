const api = require('express').Router();

const courseRoutes = require('../api/course/courseRoutes.js');
const studentRoutes = require('../api/student/studentRoutes.js');
const teachersRoutes = require('../api/teacher/teacherRoutes.js');

api.use('/courses', courseRoutes);
api.use('/students', studentRoutes);
api.use('/teachers', teachersRoutes);


module.exports = api;
