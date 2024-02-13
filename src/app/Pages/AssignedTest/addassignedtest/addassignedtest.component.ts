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
  added: boolean = false; // Flag to track if data has been added

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
    this.getAllUser();
  }

  getAllTests(event?: any){
    this.http.get<Teststructure[]>('http://localhost:5010/api/TestStructure/GetAll', this.httpOptions)
      .subscribe((response) => {
        this.testNames = response;
        console.log('subjectNames:', this.testNames);
        if(event){
          this.assignedtest.testID = parseInt(event.target.value, 10);
        }
      });
  }

  getAllUser(event?: any){
    this.http.get<User[]>('http://localhost:5010/api/User/GetAllUsers', this.httpOptions)
      .subscribe((response) => {
        this.userNames = response;
        console.log('userNames:', this.userNames);
        if(event){
          this.assignedtest.userId = parseInt(event.target.value, 10);
        }
      });
  }

  addassignedtest() {
    if (this.added) return; // Check if data has already been added
    console.log('assignedtest:', this.assignedtest);
  
    const selectedTest = this.testNames.find(test => test.testID === this.assignedtest.testID);
    if (!selectedTest) {
      console.error('Selected test not found');
      return;
    }
    this.assignedtest.testName = selectedTest.testName;
  
    const selectedUser = this.userNames.find(User => User.userId === this.assignedtest.userId);
    if (!selectedUser) {
      console.error('Selected user not found');
      return;
    }
    this.assignedtest.name = selectedUser.name;
  
    this.http
      .post('http://localhost:5010/api/AssignedTest/PostAssignedTest', this.assignedtest, this.httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['getassignedtests'], { skipLocationChange: true });
          this.added = true; // Set flag to indicate data has been added
        },
        (error) => {
          console.error('Error adding test:', error);
          if (error.status === 400) {
            console.log('Validation errors:', error.error.errors);
            this.displayValidationErrors(error.error.errors);
          }
        }
      );
  }

  displayValidationErrors(errors: any) {
    // Implement your error handling logic
    console.error('Validation errors:', errors);
  }
}
