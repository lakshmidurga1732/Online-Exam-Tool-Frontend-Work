import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Teststructure } from '../../../Models/teststructure';
import { Subject } from '../../../Models/subject';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtest',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './addtest.component.html',
  styleUrl: './addtest.component.css'
})
export class AddtestComponent {
  test: Teststructure;
  selectedSite: { siteID: number, siteName: string } = { siteID:1, siteName: '' };
  items = [
    { siteID:1, siteName: 'EXAM PLATFORM' },
    // Add more items as needed
  ];
  subjectNames: Subject[] = []; // Array to store subject names

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.test = new Teststructure();
  }
  onSiteIdChange(): void {
    this.selectedSite = this.items.find(item => item.siteID === this.selectedSite.siteID) || { siteID: 0, siteName: '' };
  }

  ngOnInit() {
    this.getAllSubjects();
  }

  getAllSubjects(event?: any) {
    this.http.get<Subject[]>('http://localhost:5010/api/Subject/GetAll', this.httpOptions)
      .subscribe((response) => {
        this.subjectNames = response;
        console.log('subjectNames:', this.subjectNames);
        this.addTestStructure();
        if (event) {
          this.test.subjectID=(parseInt(event.target.value, 10));
        }
      });
  }

    addTestStructure() {
      console.log('test:',this.test);
      console.log('subjectNames:',this.subjectNames);
      console.log(this.test.subjectID);
      console.log(this.test.subjectName);
    const selectedSubject = this.subjectNames.find(subject => subject.subjectID === this.test.subjectID);
    console.log(selectedSubject);
    if (!selectedSubject) {
      console.error('Selected subject not found');
      return;
    }
    console.log('selectedSubject:', selectedSubject);
    this.test.subjectName = selectedSubject.subjectName;
    this.http
      .post('http://localhost:5010/api/TestStructure/Add', this.test, this.httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['getAllTests'], { skipLocationChange: true });
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