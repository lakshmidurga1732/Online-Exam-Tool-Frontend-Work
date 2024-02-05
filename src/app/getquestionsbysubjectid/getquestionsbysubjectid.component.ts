import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Userresponse } from '../Models/userresponse';
import { Questionbank } from '../Models/questionbank';
@Component({
  selector: 'app-getquestionsbysubjectid',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './getquestionsbysubjectid.component.html',
  styleUrl: './getquestionsbysubjectid.component.css'
})
export class GetquestionsbysubjectidComponent implements OnInit {
  questionbank: Questionbank[] = [];
  userresponse: Userresponse[] = [];
  subjectId?: any;
  testid?: any;
  userid?: any;
  currentQuestionIndex: number = 0; // Keep track of the current question index
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  // Add this property declaration
  userAnswer:undefined;
  timer: any;
  timeLimit: number = 60;
  constructor(private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedroute.params.subscribe((p) => {
      this.subjectId = p['subjectID'];
      localStorage.setItem('subjectId', this.subjectId);
      this.testid = localStorage.getItem('testID');
      this.userid = localStorage.getItem('userId');
      this.starttest();
      this.userresponse = this.questionbank.map(() => ({ userAnswer: '', testID: this.testid, questionID: 0, userId: this.userid }));
      this.startTimer();
    });
  }
  
  starttest() {
    this.http
      .get<Questionbank[]>('http://localhost:5010/api/QuestionBank/GetBySubjectID/' + this.subjectId, this.httpOptions)
      .subscribe(
        (data: Questionbank[]) => {
          this.questionbank = data;
          this.userresponse = this.questionbank.map(() => ({ userAnswer: '', testID: this.testid, userId: this.userid }));
        },
        (error) => console.error('Error fetching questionbank', error)
      );
  }
  startTimer() {
    this.timer = setTimeout(() => {
      // Automatically submit the test when the timer reaches the time limit
      this.submittest();
    }, this.timeLimit * 1000); // Convert time limit to milliseconds
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.startTimer();
  }

  nextQuestion() {
    // Validate if an option is selected
    if (!this.userresponse[this.currentQuestionIndex].userAnswer) {
      // Handle error, maybe show a message to the user
      return;
    }

    // Move to the next question or submit the exam based on your logic
    this.currentQuestionIndex++;

    // Check if there are more questions
    if (this.currentQuestionIndex >= this.questionbank.length) {
      // All questions answered, you can handle the submission logic here
      this.submittest();
    }
  }

  submittest() {
    console.log('User Responses', this.userresponse);
    for (let i = 0; i < this.questionbank.length; i++) {
      this.userresponse[i].questionID = this.questionbank[i].questionID;
      
    }
    for (let item of this.userresponse) {
      console.log(item);
      this.http
        .post('http://localhost:5010/api/UserResponse/Add', item, this.httpOptions)
        .subscribe(
          (response) => {
            console.log('User responses saved successfully:', response);
          },
          (error) => {
            console.error('Error saving user responses:', error);
          }
        );
        this.router.navigate(['feedback']);
    }
   
  }
      // Implement the logic for finishing the test

     
  
  
  
}