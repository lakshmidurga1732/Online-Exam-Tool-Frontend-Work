import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from '../../../Models/subject';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addsubject',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './addsubject.component.html',
  styleUrl: './addsubject.component.css'
})
export class AddsubjectComponent {
  subject: Subject;
  siteID: number = 0;
  siteName:any[]=[];
  items = [
    { siteID: 1, siteName: 'EXAM PLATFORM' }, ];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.subject = new Subject();
    
  }

  addSubject() {
    console.log(this.subject);
    this.http
      .post('http://localhost:5010/api/Subject/Add', this.subject,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getallsubject'], { skipLocationChange: true });
      });
    // this.router.navigateByUrl('getallsubject');
  }
}


