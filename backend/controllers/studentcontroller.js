const Subject = require ('../models/subject');
const Student = require ('../models/student');

const studentCtrl = {};

//Crear student
studentCtrl.postStudent = async (req, res)  => { 
    console.log(req.body)
    const student = new Student(req.body)
    try{
        await student.save();
        res.status(200).send({message: "Student guardado"})
    }
    catch(err){
        res.status(500).send(err);
        console.log(err);
    }
};

//Get students
studentCtrl.getStudents = async (req, res) =>{
    console.log("GET STUDENTS!!!!");
    const listaStudents = await Student.find();
    res.json(listaStudents);
}

       

    



module.exports = studentCtrl;