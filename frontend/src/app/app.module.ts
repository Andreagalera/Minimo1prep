import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddsubjectComponent } from './components/addsubject/addsubject.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { MainComponent } from './components/main/main.component';
import { DetailsubjectComponent } from './components/detailsubject/detailsubject.component';

@NgModule({
  declarations: [
    AppComponent,
    AddsubjectComponent,
    AddstudentComponent,
    MainComponent,
    DetailsubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
