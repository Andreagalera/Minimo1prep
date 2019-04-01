const express = require('express');
const router = express.Router();

const subject = require('../controllers/controller');
router.get('/',subject.getSubjects);
router.get('/:id',subject.getInfoSubjects);
router.get('/:id',subject.getInfoStudent);
router.post('/', subject.createSubject);

module.exports =router;