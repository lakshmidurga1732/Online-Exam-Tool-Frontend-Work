import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Questionbank } from '../Models/questionbank';
@Component({
  selector: 'app-feedback-user',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './feedback-user.component.html',
  styleUrl: './feedback-user.component.css'
})
export class FeedbackUserComponent {
  starRating: number = 0;
  submitted: boolean = false;
  questionbank: Questionbank[] = [];
  subjectId?:any;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router,private activatedroute: ActivatedRoute) {
    // this.getAllQuestionbank();
  }
  ngOnInit(): void {
    this.subjectId = localStorage.getItem('subId');
    console.log(this.subjectId);
    this.getAllQuestionbank();
  }
 

  getAllQuestionbank() {
    this.http.get<Questionbank[]>('http://localhost:5010/api/QuestionBank/GetBySubjectID/'+ this.subjectId, this.httpOptions)
      .subscribe((response) => {
        this.questionbank = response;
        console.log(this.questionbank);
      });
  }

  submitFeedback() {
    this.submitted = true;
  }
}

