import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Userresponse } from '../../../Models/userresponse';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getuserresponses',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getuserresponses.component.html',
  styleUrl: './getuserresponses.component.css'
})
export class GetuserresponsesComponent {
  userresponse:Userresponse[]=[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http:HttpClient, private router: Router,){
    this.getAllUserResponses();
  }
  getAllUserResponses(){
    this.http.get<Userresponse[]>('http://localhost:5010/api/UserResponse/GetAll', this.httpOptions)
    .subscribe((response)=>{
      this.userresponse = response;
      console.log(this.userresponse);
    });
  }
  delete(userresponse: Userresponse) {
    const responseId = userresponse.responseID; 
    this.http.delete('http://localhost:5010/api/UserResponse/Delete/' + responseId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.getAllUserResponses();
      });
  }

  edit() {
    this.router.navigateByUrl('getuserresponsebyid');
  }
}
