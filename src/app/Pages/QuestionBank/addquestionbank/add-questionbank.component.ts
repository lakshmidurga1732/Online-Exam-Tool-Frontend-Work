import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Questionbank } from '../../../Models/questionbank';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-questionbank',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-questionbank.component.html',
  styleUrl: './add-questionbank.component.css'
})
export class AddQuestionbankComponent {
 questionbank : Questionbank;
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};

  constructor(private http: HttpClient, private router: Router) {
    this.questionbank = new Questionbank();
  }

  addQuestionbank() {
    console.log(this.questionbank);
    this.http
      .post('http://localhost:5010/api/QuestionBank/Add', this.questionbank, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getallquestionbank'], { skipLocationChange: true });
      });
    // this.router.navigateByUrl('addassignedtest');
  }
}


