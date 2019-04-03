import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Subject } from '../models/subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  selectedSubject: Subject;
  subjects : Subject[];
  readonly URL_API = 'http://localhost:3000/api/subjects';
   
  constructor(private http: HttpClient) { 
    this.selectedSubject = new Subject();
  }
  createSubject( Subject: Subject){
    return this.http.post(this.URL_API, Subject);
  }

  getSubjects():Observable<Subject[]>{
    return this.http.get<Subject[]>(this.URL_API);
  }
  getInfoSubjects(_id: string):Observable<Subject[]>{
    return this.http.get<Subject[]>(this.URL_API + `/${_id}`);
  }
}
