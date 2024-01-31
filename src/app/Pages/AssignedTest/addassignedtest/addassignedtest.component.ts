import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignedtest } from '../../../Models/assignedtest';
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
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};

  constructor(private http: HttpClient, private router: Router) {
    this.assignedtest = new Assignedtest();
  }

  addassignedtest() {
    console.log(this.assignedtest);
    this.http
      .post('http://localhost:5010/api/AssignedTest/PostAssignedTest', this.assignedtest,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getassignedtests'], { skipLocationChange: true });
      });
    // this.router.navigateByUrl('getassignedtests');
  }
}



