const express = require('express');
const studentRoute = express.Router();
const { getAllStudents, getSingleStudent, createNewStudent, updateStudent,
        deleteStudent } = require('./studentModels.js');
const sendJsonResp = require('../../lib/sendJsonResp.js');

studentRoute.route('/') // localhost:3000/api/students
            .get(getAllStudents, sendJsonResp)
            .post(createNewStudent, sendJsonResp);

studentRoute.route('/:id') // localhost:3000/api/students/:id
            .get(getSingleStudent, sendJsonResp)
            .put(updateStudent, sendJsonResp)
            .delete(deleteStudent, sendJsonResp);


module.exports = studentRoute;
