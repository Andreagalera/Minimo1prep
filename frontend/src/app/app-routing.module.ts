import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { AddsubjectComponent } from './components/addsubject/addsubject.component';
import { MainComponent } from './components/main/main.component';
import { DetailsubjectComponent } from './components/detailsubject/detailsubject.component';
import { DetailstudentComponent } from './components/detailstudent/detailstudent.component';

const routes: Routes = [
  { path: 'student', component: AddstudentComponent},
  { path: 'subjects', component: AddsubjectComponent},
  { path: 'main', component: MainComponent},
  { path: 'subjects/:id', component: DetailsubjectComponent},
  { path: 'subjects/subjectdetail/:id', component: DetailstudentComponent},
  { path: '', redirectTo: 'main', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
