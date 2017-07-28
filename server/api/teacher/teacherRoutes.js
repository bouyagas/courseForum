const express = require('express');
const teacherRoute = express.Router();
const { getAllTeachers, getSingleTeacher, createNewTeacher,  updateTeacher,
        deleteTeacher } = require('./teacherModels.js');
const sendJsonResp = require('../../lib/sendJsonResp.js');


teacherRoute.route('/') //localhost:3000/api/teachers
            .get(getAllTeachers, sendJsonResp)
            .post(createNewTeacher, sendJsonResp);

teacherRoute.route('/:id') //localhost:3000/api/teachers/:id
            .get(getSingleTeacher, sendJsonResp)
            .put(updateTeacher,  sendJsonResp)
            .delete(deleteTeacher, sendJsonResp);

module.exports = teacherRoute;
