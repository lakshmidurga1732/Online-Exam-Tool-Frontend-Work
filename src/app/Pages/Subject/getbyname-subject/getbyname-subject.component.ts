import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from '../../../Models/subject';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-getbyname-subject',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getbyname-subject.component.html',
  styleUrl: './getbyname-subject.component.css'
})
export class GetbynameSubjectComponent {
  subjectName?: string = '';
  subject: Subject;
  errMsg: string = '';
  isSubjectExist: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.subject = new Subject();
  }

  search() {
    if (this.subjectName) {
      this.http
        .get<Subject>(
          'http://localhost:5010/api/Subject/GetByName/' + this.subjectName
        )
        .subscribe((response) => {
          this.handleSearchResponse(response);
        });
    } else {
      this.errMsg = 'Please provide a valid organization name.';
      this.isSubjectExist = false;
    }
  }

  private handleSearchResponse(response: Subject) {
    console.log(response);
    if (response != null) {
      this.subject = response;
      this.isSubjectExist = true;
      this.errMsg = '';
    } else {
      this.errMsg = 'Subject not found';
      this.isSubjectExist = false;
    }
  }

}






