// // getbysubjectid.component.ts
// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Router, ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { Questionbank } from '../../../Models/questionbank';
// import { Userresponse } from '../../../Models/userresponse';

// @Component({
//   selector: 'app-getbysubjectid',
//   standalone: true,
//   imports: [CommonModule, HttpClientModule],
//   templateUrl: './getbysubjectid.component.html',
//   styleUrls: './getbysubjectid.component.css',
// })
// export class GetbysubjectidComponent implements OnInit {
//   subjectId?: number;
//   questions: Questionbank[] = [];
//   userResponses: Userresponse[] = [];

//   constructor(
//     private http: HttpClient,
//     private router: Router,
//     private activatedRoute: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe((params) => {
//       this.subjectId = +params['subjectId']; // Use '+' to convert to a number
//       this.getQuestionsBySubjectId();
//     });
//   }

//   getQuestionsBySubjectId() {
//     this.http
//       .get<Questionbank[]>(
//         `http://localhost:5010/api/QuestionBank/GetBySubjectID/${this.subjectId}`
//       )
//       .subscribe(
//         (data: Questionbank[]) => {
//           this.questions = data;
//           this.initializeUserResponses();
//         },
//         (error) => console.error('Error fetching questions by subject ID', error)
//       );
//   }

//   initializeUserResponses() {
//     // Initialize userResponses array with default values
//     this.userResponses = this.questions.map((question) => ({
//       questionID: question.questionID,
//       userAnswer: '',
//     }));
//   }

//   submitTest() {
//     // Implement the logic to submit the user's test (user responses)
//     // You can use another HTTP request to send the user responses to the server
//     console.log('User Responses:', this.userResponses);
//   }
// }
