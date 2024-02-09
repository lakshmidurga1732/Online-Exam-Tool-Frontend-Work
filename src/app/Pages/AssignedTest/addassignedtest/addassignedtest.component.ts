import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignedtest } from '../../../Models/assignedtest';
import { Teststructure } from '../../../Models/teststructure';
import { User } from '../../../Models/user';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addassignedtest',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './addassignedtest.component.html',
  styleUrl: './addassignedtest.component.css'
})
export class AddassignedtestComponent {
  assignedtest : Assignedtest;
  testNames: Teststructure[] = [];
  userNames: User[] = [];
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};

  constructor(private http: HttpClient, private router: Router) {
    this.assignedtest = new Assignedtest();
  }
  getCurrentDateTime(): string {
    const now = new Date();
    // Format the current date and time to be compatible with the input type "datetime-local"
    const formattedDateTime = now.toISOString().slice(0, 16);
    return formattedDateTime;
  }
  ngOnInit(){
    this.getAllTests();
  }
  getAllTests(event?: any){
    this.http.get<Teststructure[]>('http://localhost:5010/api/TestStructure/GetAll', this.httpOptions)
      .subscribe((response) => {
        this.testNames = response;
        console.log('subjectNames:', this.testNames);
        this.addassignedtest();
        if(event){
          this.assignedtest.testID=(parseInt(event.target.value, 10));
          }// Call addQuestionbank here or trigger it in response to a user action
      });
  }
  // getAllUser(event?: any){
  //   this.http.get<User[]>('http://localhost:5010/api/User/GetAllUsers', this.httpOptions)
  //     .subscribe((response) => {
  //       this.userNames = response;
  //       console.log('userNames:', this.userNames);
  //       this.addassignedtest();
  //       if(event){
  //         this.assignedtest.userId=(parseInt(event.target.value, 10));
  //         }// Call addQuestionbank here or trigger it in response to a user action
  //     });
  // }

  addassignedtest() {
    console.log('assignedtest:', this.assignedtest)
    console.log('testNames:', this.testNames)
    console.log(this.assignedtest.testID)
    console.log(this.assignedtest.testName);
    console.log(this.assignedtest);
    const selectedTest = this.testNames.find(test => test.testID === this.assignedtest.testID);
    console.log(selectedTest);
    if (!selectedTest) {
      console.error('Selected test not found');
      return;
    }
 
    console.log('selectedTest:', selectedTest);
 
    this.assignedtest.testName = selectedTest.testName;
 
    this.http
      .post('http://localhost:5010/api/AssignedTest/PostAssignedTest', this.assignedtest,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getassignedtests'], { skipLocationChange: true });
      },
      (error) => {
        console.error('Error adding test:', error);
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


