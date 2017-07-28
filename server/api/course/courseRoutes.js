const express = require('express');
const courseRoute = express.Router();
const { getAllCourses, getSingleCourse, createNewCourse, updateCourse,
        deleteCourse } = require('./courseModels.js');
const sendJsonResp = require('../../lib/sendJsonResp.js');


courseRoute.route('/') //localhost:3000/api/courses
           .get(getAllCourses, sendJsonResp)
           .post(createNewCourse, sendJsonResp);

courseRoute.route('/:id') //localhost:3000/api/courses/:id
          .get(getSingleCourse, sendJsonResp)
          .put(updateCourse, sendJsonResp)
          .delete(deleteCourse, sendJsonResp);

module.exports = courseRoute;

