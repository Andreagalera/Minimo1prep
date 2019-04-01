const Subject = require ('../models/subject');
const Student = require ('../models/student');

const subjectCtrl = {};


//Lista asignaturas(GET)
subjectCtrl.getSubjects= async (req, res) => {
   /*  res.json({
        status: 'Subjects'
    }); */ 
    const subjects = await Subject.find();
    res.json(subjects);
};

//Añadir asignatura(POST)
subjectCtrl.createSubject = async (req, res) => {
    const subject = new Subject({
        name: req.body.name
    })
    console.log(subject);
    await subject.save();
    res.json({
        'status': 'Subject guardado'
    });
};

//Añadir alumno asignatura(POST)
subjectCtrl.createStudent= function(){
   
};
//Ver informació asignatura(GET)
subjectCtrl.getInfoSubjects= function(){}
//Ver informació de alumno(GET)
subjectCtrl.getInfoStudent= function(){}

module.exports = subjectCtrl;