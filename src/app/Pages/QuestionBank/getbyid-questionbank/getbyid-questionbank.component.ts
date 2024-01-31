import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Questionbank } from '../../../Models/questionbank';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-getbyid-questionbank',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './getbyid-questionbank.component.html',
  styleUrl: './getbyid-questionbank.component.css'
})
export class GetbyidQuestionbankComponent {
  questionId?: number = 0;
  questionbank: Questionbank;
  errMsg: string = '';
  isQuestionbankExist: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router, private activatedroute:ActivatedRoute) {
    this.questionbank = new Questionbank();
    this.activatedroute.params.subscribe(p=>this.questionId=p['qid']);
    this.search();
  }

  search() {
    this.http
      .get<Questionbank>('http://localhost:5010/api/QuestionBank/GetById/' + this.questionId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.questionbank = response;
          this.isQuestionbankExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid question ID';
          this.isQuestionbankExist = false;
        }
      });
  }

  edit() {
    this.questionId = this.questionbank.questionID;
    this.http
      .put('http://localhost:5010/api/QuestionBank/Update/'+this.questionId, this.questionbank,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getallquestionbank'], { skipLocationChange: true });
      });
    // this.router.navigateByUrl('getallquestionbank');
  }
}




