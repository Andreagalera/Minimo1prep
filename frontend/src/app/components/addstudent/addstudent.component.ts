import { Component, OnInit } from '@angular/core';
import { StudentService} from'../../services/student.service';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/models/student';
declare var M: any;
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'],
  providers: [StudentService]
})
export class AddstudentComponent implements OnInit {

  constructor( private studentService: StudentService) { }

  ngOnInit() {
  }

  postStudent(form: NgForm){
    if(form.value._id){
      this.studentService.postStudent(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Student actualizado'});
        //this.getStudent();
      })
    }

    else {
       console.log(form.value);
    this.studentService.postStudent(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Student guardado'});
      //this.getStudent();
    });
    }
   
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.studentService.selectedStudent = new Student();
    }
  }
}
