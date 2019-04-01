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
 /*    const student = new Student({
        name: req.body.name
    })
    console.log(student);
    await student.save();
    res.json({
        'status': 'Student guardado'
    }); */
};

//Ver informació asignatura(GET)
subjectCtrl.getInfoSubjects=  async (req, res) => {
    console.log(req.params.id);
    const subject = await Subject.findById(req.params.id);
    res.json(subject);

}
//Ver informació de alumno(GET)
subjectCtrl.getInfoStudent= function(){}

module.exports = subjectCtrl;