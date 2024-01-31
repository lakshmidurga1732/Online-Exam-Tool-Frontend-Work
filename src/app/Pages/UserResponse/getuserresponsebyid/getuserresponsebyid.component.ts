import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Userresponse } from '../../../Models/userresponse';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-getuserresponsebyid',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './getuserresponsebyid.component.html',
  styleUrl: './getuserresponsebyid.component.css'
})
export class GetuserresponsebyidComponent {
  responseId?: number = 0;
  userresponse: Userresponse;
  errMsg: string = '';
  isUserResponseExist: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.userresponse = new Userresponse();
  }

  search() {
    this.http
      .get<Userresponse>('http://localhost:5010/api/UserResponse/GetById/'+this.responseId)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.userresponse = response;
          this.isUserResponseExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid question ID';
          this.isUserResponseExist = false;
        }
      });
  }

  edit() {
    this.responseId = this.userresponse.responseID;
    this.http
      .put('http://localhost:5010/api/UserResponse/Update/'+this.responseId, this.userresponse)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('getuserresponses');
  }

  delete() {
    this.responseId = this.userresponse.questionID;
    console.log(this.responseId)
    this.http
      .delete('http://localhost:5010/api/UserResponse/Delete/'+this.responseId)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('getuserresponses');
  }

}
