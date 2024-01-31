import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Subject } from '../../../Models/subject';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getall-subject',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getall-subject.component.html',
  styleUrl: './getall-subject.component.css'
})
export class GetallSubjectComponent {
  subjects:Subject[]=[];
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http:HttpClient,private router: Router){
    this.getAllSubject();
  }
  getAllSubject(){
    this.http.get<Subject[]>('http://localhost:5010/api/Subject/GetAll',this.httpOptions)
    .subscribe((response)=>{
      this.subjects = response;
      console.log(this.subjects);
    });
  }
  delete(subject: Subject) {
    const subjectId = subject.subjectID;
    this.http
      .delete('http://localhost:5010/api/Subject/Delete/' + subjectId,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getallsite'], { skipLocationChange: true });
        this.getAllSubject();
      });
    // this.router.navigateByUrl('getallsubject');
  }
  edit(sid:any){
    this.router.navigateByUrl('getbyidsubject/'+sid);
  }





}
