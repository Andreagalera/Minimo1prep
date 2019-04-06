import { Component, OnInit } from '@angular/core';
import { SubjectService} from '../../services/subject.service';
import { Subject } from 'src/app/models/subject';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/models/student';
declare var M: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  subjectsList: Subject[] = [];

  constructor(private subjectService: SubjectService) { }

  getSubjects(){
    this.subjectService.getSubjects()
      .subscribe(res => {
        this.subjectsList= res;
        console.log(res);
      });
  }

  deleteSubject(_id: string){
    if (confirm('Are you sure you want to delete it?')){
        this.subjectService.deleteSubject(_id)
        .subscribe( res=> {
          this.getSubjects();
          M.toast({html: 'Subject eliminado'});    
    });
  }
  }
  
  ngOnInit() {
    this.getSubjects();
  }

}
