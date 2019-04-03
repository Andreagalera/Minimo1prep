import { Component, OnInit } from '@angular/core';
import { SubjectService} from '../../services/subject.service';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  subjectsList: Subject[] = [];
  subjectsListInfo: Subject[] = [];

  constructor(private subjectService: SubjectService) { }

  getSubjects(){
    this.subjectService.getSubjects()
      .subscribe(res => {
        this.subjectsList= res;
        console.log(res);
      });
  }

  getInfoSubjects(_id){
    this.subjectService.getInfoSubjects(_id)
      .subscribe(res => {
        this.subjectsListInfo= res;
        console.log(res);
      });
  }
  ngOnInit() {
    this.getSubjects();
  }

}
