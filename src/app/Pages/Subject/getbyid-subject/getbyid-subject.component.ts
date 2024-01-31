import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from '../../../Models/subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-getbyid-subject',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './getbyid-subject.component.html',
  styleUrl: './getbyid-subject.component.css'
})
export class GetbyidSubjectComponent {
  subjectId?: number = 0;
  subject: Subject;
  errMsg: string = '';
  isSubjectExist: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router,private activatedroute:ActivatedRoute) {
    this.subject = new Subject();
    this.activatedroute.params.subscribe(p=>this.subjectId=p['sid']);
    this.search();
  }

  search() {
    this.http
      .get<Subject>('http://localhost:5010/api/Subject/GetById/' + this.subjectId,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.subject = response;
          this.isSubjectExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid subject ID';
          this.isSubjectExist = false;
        }
      });
  }

  edit() {
    this.subjectId = this.subject.subjectID;
    this.http
      .put('http://localhost:5010/api/Subject/Update/'+this.subjectId, this.subject,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getallsubject'], { skipLocationChange: true });
      });
    // this.router.navigateByUrl('getallsubject');
  }
}






