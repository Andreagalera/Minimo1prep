const Subject = require ('../models/subject');
const Student = require ('../models/student');

const studentCtrl = {};

//Crear student
studentCtrl.postStudent = async (req, res)  => { 
    //console.log(req.body)
    const student = new Student()
    student.name = req.body.name;
    student.address = req.body.address;
    student.phone = req.body.phone;
    console.log(student);
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

//Get student
studentCtrl.getInfoStudent=  async (req, res) => {
    console.log(req.params.id);
    const student = await Student.findById(req.params.id);
    res.json(student);

}

       

    



module.exports = studentCtrl;