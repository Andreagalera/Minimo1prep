const express = require('express');
const router = express.Router();

const subject = require('../controllers/controller');
router.get('/subjects',subject.getSubjects);
router.get('/subjects/:id',subject.getInfoSubjects);
router.post('/subjects', subject.createSubject);
router.put('/subjects/addStudent', subject.createStudentSubject);
router.get('/subjects/studentDetail/:id', subject.getnameStudents);

const student= require('../controllers/studentcontroller');
router.post('/student', student.postStudent);
router.get('/students', student.getStudents);
//router.get('/student', student.getDetailStudent);

module.exports =router;