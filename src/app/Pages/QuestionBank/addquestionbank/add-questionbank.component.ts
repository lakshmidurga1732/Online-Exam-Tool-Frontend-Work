import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Questionbank } from '../../../Models/questionbank';
import { Subject } from '../../../Models/subject';
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
  questionbank: Questionbank;
  subjectNames: Subject[] = []; // Array to store subject names
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
 
  constructor(private http: HttpClient, private router: Router) {
    this.questionbank = new Questionbank();
    //  sthis.questionbank.subjectID = 1; // You may want to remove this line or set it based on your actual data
  }
 
  ngOnInit() {
    this.getAllSubjects();
  }
  getAllSubjects(event?: any) {
    this.http.get<Subject[]>('http://localhost:5010/api/Subject/GetAll', this.httpOptions)
      .subscribe((response) => {
        this.subjectNames = response;
        console.log('subjectNames:', this.subjectNames);
        this.addQuestionbank();
        if(event){
          this.questionbank.subjectID=parseInt(event.target.value, 10);
          }// Call addQuestionbank here or trigger it in response to a user action
      });
  }
  addQuestionbank() {
    console.log('questionbank:', this.questionbank);
    console.log('subjectNames:', this.subjectNames);
    console.log(this.questionbank.subjectID);
    console.log(this.questionbank.subjectName);
   const selectedSubject = this.subjectNames.find(subject => subject.subjectID === this.questionbank.subjectID);
    console.log(selectedSubject);
    if (!selectedSubject) {
      console.error('Selected subject not found');
      return;
    }
 
    console.log('selectedSubject:', selectedSubject);
 
    this.questionbank.subjectName = selectedSubject.subjectName;
 
 
    this.http.post('http://localhost:5010/api/QuestionBank/Add', this.questionbank, this.httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['getallquestionbank'], { skipLocationChange: true });
        },
        (error) => {
          console.error('Error adding question:', error);
          if (error.status === 400) {
            console.log('Validation errors:', error.error.errors);
 
            // Display validation errors to the user
            this.displayValidationErrors(error.error.errors);
          }
          // Handle other errors as needed
        }
      );
  }
 
  displayValidationErrors(errors: any) {
    // Implement your error handling logic
    console.error('Validation errors:', errors);
  }
}