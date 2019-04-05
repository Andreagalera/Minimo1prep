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
  
  ngOnInit() {
    this.getSubjects();
  }

}
