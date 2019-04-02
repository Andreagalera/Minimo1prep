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
    try{
    await subject.save();
    res.json({
        'status': 'Subject guardado'
    });
    }
    catch(err){
        res.status(500).send(err);
            console.log(err);
    }
};

 //Añadir alumno asignatura(POST)
subjectCtrl.createStudentSubject= async (req, res) => {
    const subjectId = req.body.subjectId;
    const studentId = req.body.studentId;
    let subjectUpdated = await Subject.findOneAndUpdate({_id: subjectId}, {$addToSet: {student: studentId}});
    res.status(200).send({message: "Student added successfully to the subject"})
};

//Ver informació asignatura(GET)
subjectCtrl.getInfoSubjects=  async (req, res) => {
    console.log(req.params.id);
    const subject = await Subject.findById(req.params.id);
    res.json(subject);

}
//Ver estudiantes subjects
    subjectCtrl.getnameStudents =  async (req, res) => {
        try {
            // const _id = req.params.subjectId;
            let subject = await Subject.findById(req.params.id).populate('student');
            if(!subject){
                return res.status(404).send({message: 'Subject not found'})
            }else{
                res.status(200).send(subject)
            }
        } catch(err) {
            res.status(500).send(err)
        }
    }


module.exports = subjectCtrl;