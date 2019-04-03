import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  selectedStudent: Student;
  readonly URL_API = 'http://localhost:3000/api';
  students: Student[];  
  constructor(private http: HttpClient) { 
    this.selectedStudent = new Student;
  }

  postStudent(Student: Student){
    return this.http.post(this.URL_API + "/student", Student); 
  }
}
