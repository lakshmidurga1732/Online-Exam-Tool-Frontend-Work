import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Questionbank } from '../../../Models/questionbank';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getall-questionbank',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './getall-questionbank.component.html',
  styleUrl: './getall-questionbank.component.css'
})
export class GetallQuestionbankComponent {
  questionbank: Questionbank[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.getAllQuestionbank();
  }

  getAllQuestionbank() {
    this.http.get<Questionbank[]>('http://localhost:5010/api/QuestionBank/GetAll')
      .subscribe((response) => {
        this.questionbank = response;
        console.log(this.questionbank);
      });
  }

  delete(question: Questionbank) {
    const questionId = question.questionID; // Assuming 'id' is the property holding the question ID
    this.http.delete('http://localhost:5010/api/QuestionBank/Delete/' + questionId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.getAllQuestionbank();
        this.router.navigate(['getallquestionbank'], { skipLocationChange: true });
      });
  }

  edit(qid:any) {
    this.router.navigateByUrl('getbyidquestionbank/'+qid);
  }
}
