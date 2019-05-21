const express = require('express');
const router = express.Router();

const subject = require('../controllers/controller');
router.get('/subjects',subject.getSubjects);
router.get('/subjects/:id',subject.getInfoSubjects);
router.post('/subjects', subject.createSubject);
router.put('/subjects/addStudent', subject.createStudentSubject);
router.get('/subjects/studentDetail/:id', subject.getnameStudents);
router.get('/studentAllDetails', subject.getnameallStudents);
router.put('/subjects/editSubject/:id', subject.editSubject);
router.delete('/subjects/:id', subject.deleteSubject);

const student= require('../controllers/studentcontroller');
router.post('/student', student.postStudent);
router.get('/students', student.getStudents);
router.get('/students/:id', student.getInfoStudent);
//router.get('/student', student.getDetailStudent);

module.exports =router;