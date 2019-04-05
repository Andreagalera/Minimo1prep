import { Component, OnInit } from '@angular/core';
import { StudentService} from'../../services/student.service';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { Phone } from 'src/app/models/phone';

declare var M: any;
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'],
  providers: [StudentService]
})
export class AddstudentComponent implements OnInit {

  student: Student;
  phone: Phone[];
  constructor( private studentService: StudentService) {
    this.student = new Student();
    this.phone = [];
   }

  ngOnInit() {
  }

  postStudent(form: NgForm){
    this.student.name = form.value.name;
  // this.student._id = form.value._id;
   this.student.address = form.value.address;
   console.log(this.student);
   this.phone[0] = new Phone('work', form.value.phone1);
   this.phone[1] = new Phone('home', form.value.phone2);
   console.log(this.phone);
   this.student.addPhone(this.phone);

      
    this.studentService.postStudent(this.student)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Student guardado'});
      //this.getStudent();
    });
  
   
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.studentService.selectedStudent = new Student();
    }
  }
}
