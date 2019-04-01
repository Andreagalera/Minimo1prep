const subjectCtrl = {};


//Lista asignaturas(GET)
subjectCtrl.getSubjects= (req, res) => {
    res.json({
        status: 'Api Works'
    });
}
//Añadir alumno asignatura(POST)
subjectCtrl.createStudent= function(){}
//Ver informació asignatura(GET)
subjectCtrl.getInfoSubjects= function(){}
//Ver informació de alumno(GET)
subjectCtrl.getInfoStudent= function(){}

module.exports = subjectCtrl;