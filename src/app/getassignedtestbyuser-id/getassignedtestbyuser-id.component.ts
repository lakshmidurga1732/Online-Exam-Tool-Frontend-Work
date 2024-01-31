
import { Assignedtest } from '../Models/assignedtest';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-getassignedtestbyuser-id',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getassignedtestbyuser-id.component.html',
  styleUrl: './getassignedtestbyuser-id.component.css'
})
export class GetassignedtestbyuserIdComponent {
  assignedTests: Assignedtest[]=[];
  userId: any;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);

    // Fetch assigned tests for the user
    this.http.get<Assignedtest[]>('http://localhost:5010/api/AssignedTest/GetAssignedTestsByUser/'+ this.userId).subscribe(
      (data: Assignedtest[]) => {
        this.assignedTests = data;
      },
      error => console.error('Error fetching assigned tests', error)
    );
    }
    takeTest(testId: any): void {
      localStorage.setItem("testID",testId);
      this.router.navigate(['gettestbytestid/',+testId]);
    }  
}

