import { Component, OnInit } from '@angular/core';
import { SubjectService} from '../../services/subject.service';
import { NgForm } from '@angular/forms';
import { Subject } from 'src/app/models/subject';
declare var M: any;
@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  }

  createSubject(form: NgForm){
    if(form.value._id){
      this.subjectService.createSubject(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Subject creada'});
        //this.getSubjcects();
      })
    }

    else {
       console.log(form.value);
    this.subjectService.createSubject(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Subject guardado'});
      //this.getSubject();
    });
    }
   
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.subjectService.selectedSubject = new Subject();
    }
  }

}
