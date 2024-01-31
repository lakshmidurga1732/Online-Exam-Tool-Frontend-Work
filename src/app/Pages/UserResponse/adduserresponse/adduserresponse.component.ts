import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Userresponse } from '../../../Models/userresponse';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-adduserresponse',
  standalone: true,
  imports: [CommonModule,HttpClientModule, FormsModule],
  templateUrl: './adduserresponse.component.html',
  styleUrl: './adduserresponse.component.css'
})
export class AdduserresponseComponent {
  userresponse: Userresponse;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.userresponse = new Userresponse();
  }

  addUserResponse() {
    console.log(this.userresponse);
    this.http
      .post('http://localhost:5010/api/UserResponse/Add', this.userresponse, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
      this.router.navigate(['getassignedtests'], { skipLocationChange: true });
  }
}


